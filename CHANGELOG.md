---
title: Changelog - Was sich geändert hat
type: note
last_updated: 2026-02-16
tags: ["personal"]
---

# Changelog - Was sich geändert hat

> Alle Updates auf einen Blick

---

## 2026-02 (Aktuell)

### Rebranding "Bold Claim" + UI-Redesign (2026-02-27)
- 📂 Neuer Name: "Bold Claim" (vorher "Counter-Speech")
- 🎨 Web-UI: Plattform/Ton/Ziel-Selektoren von Pill-Rows zu kompakten Dropdown-Selektoren (eine Zeile statt drei)
- 🎨 Neue Fonts: Archivo Black (Brand), Sora (Display), DM Sans (Body) statt Newsreader + Inter
- 🎨 Strafferes Layout, navy-farbener Submit-Button, reduzierte Abstände

### Repo-Umbau (2026-02-26)
- 📂 Umgezogen: `90-personal/bullshit-bingo` → `01-projects/counter-speech`
- 📂 Neuer Name: "Counter-Speech" statt "Bullshit-Bingo"

### Web-Stack (2026-02-26)
- ✨ `web/index.html` - Öffentliches Frontend: 7 Modi (Reply, Thread, Prep, Drill, Red Team, De-eskalation, Faktencheck), Plattform/Ziel/Ton-Auswahl, Demo-Modus
- ✨ `web/worker.js` - Cloudflare Worker API: Pinecone-Suche + Gemini Flash Antwortgenerierung
- ✨ `web/setup.md` - Deployment-Anleitung (Pinecone + Gemini + Cloudflare, alles $0/Monat)

### Interne Tools (2026-02-26)
- ✨ `_internal/cockpit.html` - Projekt-Dashboard: Architecture-Graph, Changelog, Discovery, Roadmap (8 Features), War Room
- ✨ `_internal/topic-map.html` - Visuelle Themen-Übersicht: 10 Cluster mit Emoji-Mapping, Querverbindungen

### Content-Integration (2026-02-26)
- 📝 `russland-ukraine.md` - 8 neue Sektionen (strategischer Verlust, NATO-Eigentor, Verluste 1.2M, Energiemarkt 40%→12%, Brain-Drain, Kriegswirtschaft, China-Juniorpartner, Ukraine-Stärkung)
- 📝 `false-equivalence.md` - NRW Lagebilder 2025/2026, PMK 5-Kategorien erweitert, Antisemitismus-Reform 2024, neue Sektion "Über 12 Jahre Gewalttaten"
- 📝 `techniques.md` - Eskalations-Kette Stufe 6, Eskalations-Erkennung
- 📝 `exits.md` - 3 neue Exit-Strategien (Statistik-Delegitimierung, Terrorverherrlichung, Thanks ChatGPT)
- 📝 `one-liners.md` - 14 neue One-Liner (5 Russland-Ukraine 2026, 9 Linksextremismus-Whataboutism)
- 📝 `zinger-arsenal.md` - 4 neue Zingers (Statistik-Delegitimierung)
- 📝 `INDEX.md` - 12+ neue Schnellsuche-Einträge (Russland + False Equivalence)
- 📝 `triggers.yaml` - 6 neue Russland-Trigger

### Quellen-Verifizierung (2026-02-26)
- ✅ `russland-ukraine.md` - CSIS, Mediazona, PIIE, Bank of Finland, Moscow Times, EU Council
- ✅ `false-equivalence.md` - NRW LKA 2025, Statista, Mediendienst, Opferberatungsstellen

### Neu hinzugefügt (2026-02-25)
- ✨ `CONTENT/02-themen/verkehr-umwelt.md` - Verkehr & Umwelt: NIMBY-Deflection, Gesundheit, München-Case, Reiter-Posse
- ✨ `CONTENT/02-themen/heizungsgesetz-betrug.md` - CDU-Heizungskampagne: Gaskosten-Falle, Mieter-Betrug, Wärmepumpen-Mythen
- ✨ `CONTENT/02-themen/verfassungsschutz-verteidigung.md` - VS-Verteidigung: Maaßen, NSU, NPD, Kramer, Antifa-Tweet, Bevölkerungsaustausch
- ✨ `META/architecture.md` - Pipeline-Dokumentation: Kommentar → Antwort
- 📝 `QUICK/one-liners.md` - 18 neue One-Liner (Verkehr, Heizung, VS, PMK, False Equivalence)
- 📝 `AUTOMATION/triggers.yaml` - 25+ neue Trigger-Keywords

### Verbessert (2026-02-25)
- 📝 `CONTENT/04-rhetorik-und-strategie/false-equivalence.md` - PMK 2024 BKA-Daten, VS Personenpotenzial, NRW Lagebilder, neue Sektionen (PMK-Kategorien, Ausländer-Statistik)
- 📝 `CONTENT/02-themen/migration-fakten.md` - IAB August 2025 Integrationsdaten, "Wir schaffen das" Bilanz
- 📝 `CONTENT/01-parteien/afd-und-rechts.md` - 7-Punkte VS-Vergleich rechts/links, 3 neue Konter
- 📝 `META/techniques.md` - Eskalations-Kette Statistik-Delegitimierung, "Du relativierst"-Deflection, Offener Nazi im Thread
- 📝 `INDEX.md` - Komplette Ordner-Übersicht aktualisiert (5 Unterordner, alle Dateien), 20+ neue Schnellsuche-Einträge, Kommunalwahl München 2026, Meta-Guides erweitert, Quellen-Shortcuts ergänzt

### Cross-Referenzen hinzugefügt
- 🔗 merz-und-cdu → heizungsgesetz-betrug (Heizungsgesetz deep-dive)
- 🔗 afd-und-rechts → verfassungsschutz-verteidigung (historische VS-Verteidigung)
- 🔗 heizungsgesetz-betrug → klima (CO2-Bepreisung)
- 🔗 heizungsgesetz-betrug → merz-und-cdu (CDU-Versprechen)
- 🔗 verfassungsschutz-verteidigung → afd-und-rechts (Remigration/Potsdam)
- 🔗 verfassungsschutz-verteidigung → russland-ukraine (Kreml-Propaganda)
- 🔗 techniques → verfassungsschutz-verteidigung (Offener Nazi Taktik)

### Strukturelle Verbesserungen (2026-02-25)
- 📂 INDEX.md Ordner-Übersicht zeigt jetzt echte Subfolder-Struktur (01-05)
- 📂 Peter Thiel Dateien (3) in INDEX indiziert unter Trump & USA
- 📂 cdu-argumente-konter.md in INDEX indiziert unter Merz & CDU
- 📂 Kommunalwahl München 2026 (15 Dateien) komplett in INDEX indiziert
- 📂 Strategie-Dateien (Mason, Tactical Protocols) in Meta-Guides verlinkt

### Aufgeräumt
- 🗑️ `input/` - 7 integrierte Quelldateien gelöscht, Ordner entfernt
- 🗑️ `repo-updates.md` → `archive/` verschoben
- 🗑️ `[NEU]`-Tags aus INDEX entfernt

### Quellen-Verifizierung (2026-02-25)
- ✅ `heizungsgesetz-betrug.md` - FAZ, Tagesspiegel, ADAC, DIW, Fraunhofer ISE, Verbraucherzentrale, BVerfG
- ✅ `verfassungsschutz-verteidigung.md` - taz, ZDF, Correctiv, bpb, Wikipedia, Bundestag
- ✅ `false-equivalence.md` - BKA PMK 2024, VS-Bericht 2024, NRW LKA Lagebilder

### Früher in 2026-02
- ✨ `CONTENT/02-themen/verkehr-tempo30.md` - Tempo 30 Mittlerer Ring: Luft, Lärm, Sicherheit, Verkehrsfluss
- 📝 `INDEX.md` - Neue Sektion "Verkehr & Tempo 30" mit 5 Schnellsuche-Einträgen
- 📝 `QUICK/one-liners.md` - 4 neue One-Liner (Grenzwert, Stau, Lärm, Kind-auf-Straße)
- 📝 `AUTOMATION/triggers.yaml` - Neue Trigger-Kategorie "verkehr"
- ✅ `verkehr-tempo30.md` - Abendzeitung, VCD, DUH, ScienceDirect Zürich, ETSC, MDPI Metastudie
- 🗑️ `CONTENT/New input on tempo 30.md` → Integriert in `verkehr-tempo30.md`

---

## 2025-01

### Neu hinzugefügt
- ✨ `klima.md` - Klimaleugner-Konter
- ✨ `gender.md` - Trans/Gender-Debatte Fakten
- ✨ `exits.md` - Dedizierte Exit-Strategien
- ✨ `self-care.md` - Burnout-Prävention
- ✨ `psychologie.md` - Warum Menschen Disinfo glauben
- ✨ `CHANGELOG.md` - Diese Datei
- ✨ `triggers.yaml` - Keyword-Mapping für Automatisierung
- ✨ `one-liners.md` - Alle Konter unter 30 Wörtern

### Verbessert
- 📝 `INDEX.md` - Schwierigkeits-Tags (🟢🟡🔴), Quick-Kill Links
- 📝 `false-equivalence.md` - Far-Right Terror Listen (USA + DE)
- 📝 Alle Dateien: Kürzere Zinger, konsistente Struktur

### Entfernt / Verschoben
- 🗑️ `reddit-kommentare.md` → `archive/` (256KB Ballast)
- 🗑️ Copy-Paste Blöcke aus INDEX (nur noch Links)

### Fixes
- 🔧 Duplikate entfernt (Kriminalstatistik nur noch in migration-fakten.md)
- 🔧 Obsidian-Links korrigiert

### Quellen-Verifizierung (2025-01-25)
- ✅ `klima.md` - NASA, IPCC AR6, Klimafakten.de Links verifiziert
- ✅ `gender.md` - WHO ICD-11, APA 2024 Policy Links verifiziert
- ✅ `false-equivalence.md` - Amadeu Antonio (221 Opfer), NSU, Hanau, Buffalo verifiziert
- 📎 Alle Quellen mit `[LAST_CHECKED: 2025-01]` Tags versehen

### Neu hinzugefügt (2025-01-25)
- ✨ `techniques.md` - Bot-Erkennung, SIFT-Methode, Street Epistemology, Deep Canvassing, Prebunking
- 📎 Quellen: Nature 2025 Bot-Studie, Harvard Prebunking Meta-Analysis, Carnegie Counter-Disinfo Guide

### Neu hinzugefügt (2025-01-25 - Abend)
- ✨ `CONTENT/linke.md` - Konter gegen Linke-Hetze, SED-Mythos, BSW-Abgrenzung, Gewaltstatistiken
- ✨ `CONTENT/trump-usa.md` - Trump-Faschismus Analyse, Hitler-Zitate, Insider-Quotes, Republikanische Propaganda
- ✨ `CONTENT/project-2025.md` - Komplettes Heritage Foundation Playbook (alle 30 Kapitel)
- ✨ `CONTENT/afd-wahlprogramm-2025.md` - AfD Bundestagswahlprogramm 2025 Analyse
- 📝 `INDEX.md` - Neue Dateien in Navigation, erweiterte Quellen-Shortcuts

### Quellen-Verifizierung (2025-01-25 - Abend)
- ✅ `project-2025.md` - Heritage Foundation, NPR, Time, ACLU, Democracy Forward
- ✅ `afd-wahlprogramm-2025.md` - AfD PDF, DGB Synopse, Correctiv Potsdam
- ✅ `trump-usa.md` - Atlantic (Kelly/Milley Quotes), PolitiFact, NPR

---

## Geplant

### Q2 2025
- [x] ~~Quellen-Review (tote Links, veraltete Zahlen)~~ → ✅ Erledigt 2025-01-25
- [ ] JSON-Export für Bot-Integration
- [ ] Medien/Lügenpresse Sektion

### Später
- [ ] Mobile-optimierte Version
- [ ] Telegram-Bot Integration
- [ ] Automatische Quellen-Validierung

---

## Wie updaten

### Wenn du neuen Content findest:

1. Richtige Datei identifizieren (oder neue anlegen)
2. Struktur beibehalten: Behauptung → Fakten → Quelle → Konter
3. One-Liner in `one-liners.md` hinzufügen
4. `triggers.yaml` updaten wenn neue Keywords
5. Hier im Changelog dokumentieren

### Wenn Quellen veralten:

1. Neue Quelle finden
2. `[LAST_CHECKED: YYYY-MM]` Tag aktualisieren
3. Hier dokumentieren

---

## Quellen-Check Status

| Datei | Letzter Check | Status | Verifizierte Quellen |
|-------|---------------|--------|---------------------|
| afd-und-rechts.md | 2025-06 | ✅ Aktuell | VS-Bericht 2024, BKA PMK 2024, BfV |
| afd-wahlprogramm-2025.md | 2025-01-25 | ✅ Verifiziert | AfD PDF, DGB Synopse, Correctiv |
| cdu-argumente-konter.md | 2026-02 | ✅ Aktuell | - |
| merz-und-cdu.md | 2026-02 | ✅ Aktuell | - |
| linke.md | 2025-01-25 | ✅ Verifiziert | bpb, OLG Köln, Amadeu Antonio |
| trump-usa.md | 2025-01-25 | ✅ Verifiziert | Atlantic, NPR, PolitiFact |
| project-2025.md | 2025-01-25 | ✅ Verifiziert | Heritage Foundation, ACLU, Time |
| russland-ukraine.md | 2026-02 | ✅ Aktuell | CSIS, Mediazona, PIIE, Bank of Finland, Moscow Times |
| migration-fakten.md | 2025-08 | ✅ Aktuell | IAB Aug 2025, ifo 2025 |
| wirtschaft-housing.md | 2025-01 | ⚠️ Review nötig | - |
| false-equivalence.md | 2026-02 | ✅ Aktuell | BKA PMK 2024, NRW LKA 2025, VS-Bericht 2024, Statista, Mediendienst |
| klima.md | 2025-01-25 | ✅ Verifiziert | NASA, IPCC AR6, Klimafakten.de, Skeptical Science |
| gender.md | 2025-01-25 | ✅ Verifiziert | WHO ICD-11, APA 2024, UN News, PubMed |
| verkehr-tempo30.md | 2026-02-16 | ✅ Verifiziert | Abendzeitung, VCD, DUH, ScienceDirect, ETSC, MDPI |
| verkehr-umwelt.md | 2026-02-25 | ✅ Verifiziert | WHO, UBA, ADAC, BayVGH |
| heizungsgesetz-betrug.md | 2026-02-25 | ✅ Verifiziert | FAZ, DIW, Fraunhofer ISE, BVerfG |
| verfassungsschutz-verteidigung.md | 2026-02-25 | ✅ Verifiziert | taz, ZDF, Correctiv, bpb, Bundestag |
| kontokuendigungen-sanktionen.md | 2026-02 | ✅ Aktuell | - |

---

## Backup-Policy

Vor größeren Änderungen:
```bash
cp -r bullshit-bingo bullshit-bingo-backup-$(date +%Y%m%d)
```

Aktuelles Backup: `bullshit-bingo-backup-20260124-233530`
