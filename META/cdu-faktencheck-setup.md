---
title: Setup-Anleitung: CDU-Faktencheck Claude Project
type: note
last_updated: 2026-02-16
tags: ["personal"]
---

# Setup-Anleitung: CDU-Faktencheck Claude Project

## Schritt-für-Schritt-Einrichtung

### 1. Claude Project erstellen
- Gehe auf claude.ai → Projects → "Create Project"
- Name: z.B. "CDU-Faktencheck" oder "Politische Argumentationsanalyse"

### 2. System-Prompt einfügen
- Öffne die Project Settings → "Custom Instructions"
- Kopiere den **gesamten Inhalt** der Datei `cdu-faktencheck-system-prompt.md` dort hinein
- Speichern

### 3. Wissensbasis hochladen
- Im Project → "Project Knowledge" → "Add Content"
- Lade die Datei `cdu-faktencheck-wissensbasis.md` hoch
- Claude nutzt diese automatisch als Referenz

### 4. Optionale Erweiterungen
Du kannst die Wissensbasis jederzeit erweitern:
- **Aktuelle CDU-Beschlüsse**: Parteitagsbeschlüsse als PDF/Text hochladen
- **Wahlprogramme**: CDU-Wahlprogramm 2025 als PDF
- **Factsheets**: Destatis-Datenblätter zu spezifischen Themen
- **Studien**: Konkrete Studien, auf die du häufig referenzieren willst

### 5. Testen
Starte eine neue Conversation im Project und teste mit:

**Test 1 (Sachlich):**
> "Die CDU sagt: Das Bürgergeld ist eine soziale Hängematte und setzt falsche Anreize."

**Test 2 (Debatte):**
> "Wie konter ich das Argument: Deutschland kann sich den Klimaschutz nicht leisten, weil das Arbeitsplätze kostet?"

**Test 3 (Sokratisch):**
> "Wie bringe ich meinen Onkel beim Familienessen zum Nachdenken, wenn er sagt: Wir nehmen zu viele Ausländer auf?"

**Test 4 (Differenziert):**
> "Hat die CDU Recht, dass die Schuldenbremse wichtig ist?"

## Tipps für die beste Nutzung

- **Zitat eingeben**: Am effektivsten ist es, ein konkretes CDU-Zitat oder -Argument einzugeben
- **Kontext geben**: "Mein Kollege sagt..." oder "In der Talkshow hieß es..." hilft dem Bot, den richtigen Ton zu treffen
- **Nach Quellen fragen**: "Gib mir die 3 stärksten Studien gegen dieses Argument"
- **Formulierungshilfe**: "Formuliere mir einen Dreizeiler, den ich auf Social Media posten kann"
- **Steelmanning fordern**: "Was ist das stärkste Argument FÜR die CDU-Position?"

## Wichtiger Hinweis

Die Wissensbasis enthält Daten mit Stand 2024/2025. Für aktuelle Entwicklungen
solltest du Web Search im Project aktiviert lassen, damit Claude auch aktuelle
Daten ziehen kann.
