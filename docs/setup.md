# Counter-Speech Web Stack — Setup

Kostenloser Stack: Pinecone (Vektor-Suche) + Gemini Flash (LLM) + Cloudflare Worker (API).

## 1. Pinecone Index erstellen

1. Account: [app.pinecone.io](https://app.pinecone.io) (Free Tier: 100K Vektoren, unlimited Queries)
2. Index erstellen:
   - Name: `counter-speech`
   - Model: `multilingual-e5-large` (für deutschen Content)
   - Cloud: AWS / us-east-1
3. API Key kopieren (Settings → API Keys)
4. Host URL kopieren (Index → Connection Details)

## 2. Content indexieren

Im Claude Code Terminal:

```bash
# Pinecone MCP ist bereits konfiguriert
# Alle CONTENT/ Dateien in Chunks aufteilen und upserten
```

Jede Datei wird in Sektionen aufgeteilt. Pro Record:
- `text`: Der Inhalt der Sektion
- `file`: Dateiname (z.B. `russland-ukraine.md`)
- `section`: Sektions-Überschrift

## 3. Gemini API Key

1. [aistudio.google.com](https://aistudio.google.com) → API Key erstellen
2. Free Tier: 15 Requests/Minute, 1M Tokens/Tag

## 4. Cloudflare Worker deployen

```bash
# Wrangler installieren (einmalig)
npm install -g wrangler

# Login
wrangler login

# Secrets setzen
wrangler secret put PINECONE_API_KEY
wrangler secret put PINECONE_HOST
wrangler secret put PINECONE_INDEX
wrangler secret put GEMINI_API_KEY

# Deployen
cd web
wrangler deploy worker.js --name counter-speech
```

Die Worker-URL wird angezeigt (z.B. `https://counter-speech.<account>.workers.dev`).

## 5. Frontend verbinden

In `web/index.html` die `API_URL` Variable setzen:

```javascript
const API_URL = 'https://counter-speech.<dein-account>.workers.dev';
```

Dann `index.html` hosten (GitHub Pages, Cloudflare Pages, oder einfach lokal öffnen).

## Kosten

| Service | Free Tier | Limit |
|---------|-----------|-------|
| Pinecone | $0 | 100K Vektoren, unlimited Queries |
| Gemini Flash 2.0 | $0 | 15 RPM, 1M Tokens/Tag |
| Cloudflare Workers | $0 | 100K Requests/Tag |
| **Gesamt** | **$0/Monat** | |

## Architektur

```
User → index.html → Cloudflare Worker → Pinecone (Suche)
                                       → Gemini Flash (Antwort)
                                       → User (Reply + Quellen)
```

Die Markdown-Dateien bleiben unberührt. Pinecone enthält eine Kopie der Inhalte als Vektoren.
