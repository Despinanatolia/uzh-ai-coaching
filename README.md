# KI in der Lehre · AI Coaching Toolkit

Ein Next.js 14 Toolkit für Despina Fidanoglu (AI-Coach, Abteilung Lehrentwicklung UZH) und Prof. Daniel Ursprung (Historisches Seminar). Zweisprachig (DE/EN), UZH-Branding (#0028a5, Source Sans 3).

## Schnellstart (lokal testen)

```bash
npm install
npm run dev
```

Dann http://localhost:3000 öffnen.

---

## Inhalte bearbeiten (ohne Code-Kenntnisse)

Alle Inhalte liegen in `data/` als TypeScript-Dateien. Struktur pro Eintrag:
`{ de: "deutscher Text", en: "English text" }`. Einfach den Text in den Anführungszeichen ändern.

| Was ändern? | Datei |
|---|---|
| Navigationslabels, Hero-Text, alle UI-Strings | `data/translations.ts` |
| Bloom-Pyramide (6 Stufen) | `data/bloom.ts` |
| Methoden-Karten (8 Methoden) | `data/methods.ts` |
| KI-Entwicklungen Timeline | `data/developments.ts` |
| Ressourcen-Links | `data/resources.ts` |

Neue Methode hinzufügen: in `data/methods.ts` einfach einen neuen Eintrag ans Array anhängen. Neue Zeitleisten-Einträge gleich in `data/developments.ts` — oben einfügen heisst neuester oben.

---

## Deployment auf Vercel via GitHub

**Zielgruppe: Personen ohne GitHub/Vercel-Vorerfahrung.** 15–20 Minuten.

### Schritt 1 — GitHub-Konto & neues Repository

1. Falls noch nicht vorhanden: auf https://github.com/signup ein Konto anlegen.
2. Oben rechts auf **+** → **New repository** klicken.
3. Name z.B. `uzh-ai-coaching`, sichtbarkeit **Private** (nur du siehst es) oder **Public**.
4. **NICHT** «Add a README» ankreuzen — wir haben schon eine.
5. **Create repository** klicken. Du siehst jetzt eine leere Repo-Seite mit Anleitungen.

### Schritt 2 — Projekt hochladen

**Option A: Einfachster Weg (Drag & Drop im Browser):**

1. Auf der leeren Repo-Seite auf **uploading an existing file** klicken.
2. Alle Dateien und Ordner aus deinem `uzh-ai-coaching`-Ordner ins Browser-Fenster ziehen.
   _Wichtig:_ den `node_modules`-Ordner **NICHT** hochladen, falls er existiert.
3. Unten **Commit changes** klicken.

**Option B: Mit Terminal (für Fortgeschrittene):**

```bash
cd uzh-ai-coaching
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/uzh-ai-coaching.git
git push -u origin main
```

### Schritt 3 — Vercel-Konto

1. Auf https://vercel.com/signup gehen.
2. **Continue with GitHub** wählen — das verbindet beide Konten automatisch.
3. Vercel fragt nach Berechtigungen — akzeptieren.

### Schritt 4 — Projekt deployen

1. Im Vercel-Dashboard auf **Add New...** → **Project**.
2. In der Liste dein Repository `uzh-ai-coaching` suchen, **Import** klicken.
3. Vercel erkennt automatisch Next.js. Alle Einstellungen auf Standard lassen.
4. **Deploy** klicken.
5. Nach 1–2 Minuten: fertig. Vercel zeigt eine URL wie `uzh-ai-coaching.vercel.app`.

### Schritt 5 — Änderungen publizieren

Jedes Mal, wenn du in GitHub etwas änderst (z.B. via Web-UI eine Datei editierst und speicherst), baut Vercel automatisch neu und deployt. Keine manuelle Arbeit nötig.

**Direkt auf GitHub editieren:**
1. In deinem Repo zur Datei navigieren (z.B. `data/methods.ts`).
2. Oben rechts das Bleistift-Symbol klicken.
3. Text ändern, unten **Commit changes** klicken.
4. 1–2 Minuten warten — die Live-Seite ist aktualisiert.

### Eigene Domain hinzufügen (optional)

In Vercel: Projekt öffnen → **Settings** → **Domains** → Domain eintragen und den DNS-Anweisungen folgen.

---

## Technisches

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS, UZH-Corporate-Blau (#0028a5), Source Sans 3
- **i18n:** Eigener minimaler Provider mit React Context (keine externe Library)
- **Keine Datenbank**, alles statisch
- **Keine Tracking-Tools**, keine Cookies

## Projektstruktur

```
app/
  layout.tsx              # Root Layout mit Header/Footer/I18nProvider
  page.tsx                # Startseite
  bloom/page.tsx          # Bloom-Taxonomie Pyramide
  methoden/page.tsx       # Methoden-Grid
  entwicklungen/page.tsx  # KI-Entwicklungen Timeline
  ressourcen/page.tsx     # Ressourcen-Liste
  kontakt/page.tsx        # Kontakt
  globals.css             # Globale Styles + Tailwind
components/
  I18nProvider.tsx        # DE/EN Context Provider
  LanguageToggle.tsx      # DE/EN Toggle-Button
  Header.tsx              # Navigation mit Language Toggle
  Footer.tsx              # Footer
  BloomPyramid.tsx        # Interaktive SVG-Pyramide
  MethodsGrid.tsx         # Filterbare Methoden-Karten
data/
  translations.ts         # Alle UI-Strings DE/EN
  bloom.ts                # 6 Bloom-Stufen
  methods.ts              # 8 Methoden
  developments.ts         # KI-Entwicklungen Timeline
  resources.ts            # Externe Ressourcen
lib/
  i18n.ts                 # i18n-Hilfsfunktionen
```

## Lizenz

© 2026 Despina Fidanoglu · Abteilung Lehrentwicklung, Universität Zürich.
