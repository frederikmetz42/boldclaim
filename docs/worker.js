/**
 * Counter-Speech API Worker
 * Deploy to Cloudflare Workers (free tier)
 *
 * Environment variables needed:
 *   PINECONE_API_KEY  - from app.pinecone.io
 *   PINECONE_INDEX    - "counter-speech"
 *   PINECONE_HOST     - your index host URL (from Pinecone dashboard)
 *   GEMINI_API_KEY    - from aistudio.google.com (free tier: 15 RPM, 1M tokens/day)
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const MODE_PROMPTS = {
  reply: `Du bist ein Fakten-basierter Debattenhelfer. Der User hat einen Kommentar kopiert, auf den er antworten will.
Analysiere den Kommentar: Welche Behauptungen werden aufgestellt? Welche rhetorischen Tricks werden verwendet?
Nutze die bereitgestellten Konter-Daten um eine fundierte, quellenbasierte Antwort zu generieren.
Schreibe für die stillen Mitleser, nicht für den Kommentator.`,

  thread: `Du bist ein Thread-Analyst. Der User hat einen kompletten Diskussions-Thread kopiert.
Erstelle eine Analyse:
1. Welche Behauptungen tauchen auf?
2. Welche Kommentare sind Bait (ignorieren)?
3. Welche Kommentare sind es wert, beantwortet zu werden?
4. Für die Top-3 lohnenswerten Kommentare: Schlage jeweils einen Konter vor.`,

  prep: `Du bist ein Briefing-Ersteller. Der User beschreibt eine bevorstehende Situation (Familienessen, Stammtisch, etc.).
Erstelle ein Briefing:
1. Wahrscheinliche Behauptungen die kommen werden
2. Beste Konter für MÜNDLICHE Gespräche (kürzer, empathischer als online)
3. De-eskalations-Punkte
4. Exit-Strategien wenn es eskaliert`,

  drill: `Du bist ein Debate-Trainer. Spiele einen aggressiven Gegner.
Generiere eine realistische Behauptung basierend auf dem gewählten Archetyp.
Wenn der User antwortet, bewerte:
- Faktengenauigkeit (hat er die richtigen Daten?)
- Quellennutzung (hat er Quellen genannt?)
- Tonfall (überzeugend für Mitleser?)
- Verbesserungsvorschlag mit Verweis auf passende Konter-Dateien`,

  redteam: `Du bist ein Red-Team-Analyst. Der User hat seinen EIGENEN Antwort-Entwurf eingefügt.
Finde jede Schwäche:
1. Wo könnte der Gegner kontern?
2. Welche Quellen sind veraltet oder schwach?
3. Welche Formulierungen klingen herablassend?
4. Was würden stille Mitleser denken?
Schlage eine verbesserte Version vor.`,

  deescalation: `Du bist ein De-eskalations-Experte. Ziel ist NICHT gewinnen, sondern beruhigen.
Der Kommentar kommt von jemandem, mit dem der User eine Beziehung hat (Familie, Freund, Kollege).
Erstelle eine Antwort die:
1. Die Emotion validiert (nicht die Fakten)
2. Sanft auf Fakten hinweist ohne Angriff
3. Einen Off-Ramp bietet
4. Die Beziehung schützt`,

  factcheck: `Du bist ein reiner Faktencheck-Bot. Keine Rhetorik, keine Zingers.
Für jede Behauptung im Kommentar:
- Bewertung: Wahr / Teilweise wahr / Irreführend / Falsch
- Korrekte Fakten mit Zahlen
- Quelle mit Link
Kein Kommentar, keine Meinung. Nur Fakten.`
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    if (request.method !== 'POST') {
      return new Response('POST only', { status: 405, headers: CORS });
    }

    try {
      const { mode, text, platform, goal, tone, lang } = await request.json();

      if (!text || !mode) {
        return json({ error: 'mode and text required' }, 400);
      }

      // Step 1: Search Pinecone for relevant konters
      const konters = await searchPinecone(env, text);

      // Step 2: Build prompt
      const systemPrompt = MODE_PROMPTS[mode] || MODE_PROMPTS.reply;
      const contextBlock = konters.length > 0
        ? 'Relevante Konter-Daten aus der Datenbank:\n\n' +
          konters.map((k, i) => `[${i+1}] (${k.file}) ${k.text}`).join('\n\n')
        : 'Keine spezifischen Konter in der Datenbank gefunden. Antworte basierend auf Allgemeinwissen.';

      const platformNote = platform ? `Plattform: ${platform}. Passe Länge und Ton entsprechend an.` : '';
      const goalNote = goal ? `Ziel: ${goal}.` : '';
      const toneNote = tone ? `Tonfall: ${tone}.` : '';

      const langNote = lang === 'en' ? 'IMPORTANT: Respond entirely in English. Translate any German sources/quotes inline.\n\n' : '';

      const userPrompt = `${langNote}${platformNote} ${goalNote} ${toneNote}

${contextBlock}

---
Kommentar des Gegners:
${text}

---
Generiere deine Antwort.`;

      // Step 3: Call Gemini Flash
      const reply = await callGemini(env, systemPrompt, userPrompt);

      // Step 4: Return results
      const sources = konters.map(k => ({ file: k.file, section: k.section, score: k.score }));

      return json({ reply, sources, mode, kontersFound: konters.length });

    } catch (err) {
      return json({ error: err.message }, 500);
    }
  }
};

async function searchPinecone(env, query) {
  const res = await fetch(`${env.PINECONE_HOST}/records/namespaces/default/search`, {
    method: 'POST',
    headers: {
      'Api-Key': env.PINECONE_API_KEY,
      'Content-Type': 'application/json',
      'X-Pinecone-API-Version': '2025-01'
    },
    body: JSON.stringify({
      query: { inputs: { text: query }, top_k: 5 },
      fields: ['text', 'file', 'section']
    })
  });

  if (!res.ok) return [];

  const data = await res.json();
  return (data.result?.hits || []).map(h => ({
    text: h.fields?.text || '',
    file: h.fields?.file || '',
    section: h.fields?.section || '',
    score: h._score || 0
  }));
}

async function callGemini(env, systemPrompt, userPrompt) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [{ parts: [{ text: userPrompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
      })
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error('Gemini error: ' + err);
  }

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Keine Antwort generiert.';
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' }
  });
}
