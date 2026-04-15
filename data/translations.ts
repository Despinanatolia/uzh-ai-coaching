import type { LocalizedString } from "@/lib/i18n";

export const ui: Record<string, LocalizedString> = {
  // Navigation
  nav_home: { de: "Startseite", en: "Home" },
  nav_bloom: { de: "Bloom-Taxonomie", en: "Bloom's Taxonomy" },
  nav_methods: { de: "Methoden", en: "Methods" },
  nav_developments: { de: "KI-Entwicklungen", en: "AI Developments" },
  nav_resources: { de: "Ressourcen", en: "Resources" },
  nav_contact: { de: "Kontakt", en: "Contact" },

  // Site meta
  site_title: { de: "KI in der Lehre", en: "AI in Teaching" },
  site_subtitle: {
    de: "Ein Toolkit für Prof. Daniel Ursprung",
    en: "A toolkit for Prof. Daniel Ursprung",
  },

  // Home
  home_hero_title: {
    de: "KI didaktisch sinnvoll in die Geschichtslehre integrieren",
    en: "Integrating AI meaningfully into history teaching",
  },
  home_hero_sub: {
    de: "Ein lebendiges Toolkit aus dem AI-Coaching der Abteilung Lehrentwicklung der UZH, für das BA-Seminar Moldau und darüber hinaus.",
    en: "A living toolkit from the AI coaching program of the Teaching Development Unit at UZH, for the BA Seminar Moldau and beyond.",
  },
  home_who_title: { de: "Wer steht hinter diesem Toolkit?", en: "Who is behind this toolkit?" },
  home_who_text: {
    de: "Ich bin Despina Fidanoglu, AI-Coach an der Abteilung Lehrentwicklung der Universität Zürich. Gemeinsam mit Prof. Daniel Ursprung (Historisches Seminar) entwickle ich didaktisch fundierte Wege, generative KI in den Geschichtsunterricht zu integrieren, ohne die wissenschaftliche Handwerkskunst zu verwässern.",
    en: "I'm Despina Fidanoglu, AI coach at the Teaching Development Unit of the University of Zurich. Together with Prof. Daniel Ursprung (Department of History), I develop pedagogically grounded ways to integrate generative AI into history teaching without diluting scholarly craft.",
  },
  home_project_title: {
    de: "Aktuelles Projekt: Konzept-Feedback-Agent",
    en: "Current project: Concept Feedback Agent",
  },
  home_project_text: {
    de: "Für das BA-Seminar Moldau (FS 2026) haben wir einen KI-gestützten Schreibtutor gebaut, der Studierenden formatives Feedback auf ihre Exposés gibt. Der Agent bewertet acht Pflichtbestandteile, stellt Leitfragen statt Musterlösungen und bietet zwei Feedback-Modi: ausführlich oder kompakt. Er ersetzt nicht die Betreuung durch Daniel, sondern bereitet Studierende auf das Besprechungsgespräch vor.",
    en: "For the BA Seminar Moldau (Spring 2026), we built an AI-powered writing tutor that gives students formative feedback on their proposals. The agent evaluates eight mandatory components, asks guiding questions instead of providing model answers, and offers two feedback modes: detailed or compact. It doesn't replace Daniel's supervision; it prepares students for the consultation.",
  },
  home_what_title: { de: "Was findest du hier?", en: "What will you find here?" },
  home_card_bloom: {
    de: "Eine interaktive Bloom-Taxonomie, die zeigt, wo KI welche kognitiven Prozesse unterstützen oder unterlaufen kann.",
    en: "An interactive Bloom's taxonomy showing where AI can support or undermine which cognitive processes.",
  },
  home_card_methods: {
    de: "Acht lernwissenschaftlich fundierte Unterrichtsmethoden, jede mit zitierter Studie, und Leitfragen für eigene Entwürfe.",
    en: "Eight classroom methods grounded in learning science, each with cited research, plus guiding questions for your own designs.",
  },
  home_card_dev: {
    de: "Ein Tracker relevanter KI-Entwicklungen mit konkreten Implikationen für die Hochschullehre.",
    en: "A tracker of relevant AI developments with concrete implications for higher education.",
  },

  // Bloom page
  bloom_title: { de: "Bloom-Taxonomie & KI", en: "Bloom's Taxonomy & AI" },
  bloom_intro: {
    de: "Die überarbeitete Bloom-Taxonomie (Anderson & Krathwohl, 2001) ordnet kognitive Prozesse von einfacher Wiedergabe bis zu eigenständiger Kreation. Klicke auf eine Stufe, um zu sehen, was KI dort leisten kann, welche lernwissenschaftlich erprobte Technik die Integration trägt (mit Quelle) und worauf du achten solltest.",
    en: "The revised Bloom's taxonomy (Anderson & Krathwohl, 2001) orders cognitive processes from simple recall to original creation. Click a tier to see what AI can do there, which empirically validated learning technique grounds the integration (with source), and what to watch out for.",
  },
  bloom_what_ai: { de: "Was KI hier kann", en: "What AI can do here" },
  bloom_method: {
    de: "Zugrundeliegende Lernmethode",
    en: "Underlying learning-science method",
  },
  bloom_activity: { de: "Aktivität für das Seminar", en: "Activity for the seminar" },
  bloom_warning: { de: "Vorsicht", en: "Watch out" },
  bloom_source: { de: "Evidenzbasis", en: "Evidence base" },
  bloom_select_prompt: {
    de: "Wähle eine Stufe der Pyramide, um Details zu sehen.",
    en: "Select a tier of the pyramid to see details.",
  },

  // Methods page
  methods_title: { de: "Methoden-Repository", en: "Methods Repository" },
  methods_intro: {
    de: "Acht lernwissenschaftlich fundierte Methoden, die KI didaktisch sinnvoll einbinden, jede mit Quellenangabe. Darunter findest du sieben Leitfragen für eigene Designs und kuratierte weiterführende Ressourcen.",
    en: "Eight methods grounded in learning science that integrate AI pedagogically, each with a cited source. Below you'll find seven guiding questions for your own designs, plus curated further resources.",
  },
  methods_filter_all: { de: "Alle", en: "All" },
  methods_originator: { de: "Entwickelt von", en: "Developed by" },
  methods_principle: { de: "Kerngedanke", en: "Core principle" },
  methods_ai_role: { de: "Rolle der KI", en: "Role of AI" },
  methods_example: { de: "Beispiel", en: "Example" },
  methods_bloom: { de: "Bloom-Stufe", en: "Bloom level" },
  methods_difficulty: { de: "Schwierigkeit", en: "Difficulty" },
  methods_category: { de: "Kategorie", en: "Category" },
  methods_source: { de: "Quelle", en: "Source" },
  difficulty_easy: { de: "Einfach", en: "Easy" },
  difficulty_medium: { de: "Mittel", en: "Medium" },
  difficulty_hard: { de: "Fortgeschritten", en: "Advanced" },
  cat_historiography: { de: "Historiographie", en: "Historiography" },
  cat_collaborative: { de: "Kooperatives Lernen", en: "Cooperative Learning" },
  cat_constructive: { de: "Konstruktives Lernen", en: "Constructive Learning" },

  // Leitfragen & Resources block on Methoden page
  leitfragen_title: {
    de: "Leitfragen für eigene Methoden-Entwicklung",
    en: "Guiding questions for developing your own methods",
  },
  leitfragen_intro: {
    de: "Diese sieben Fragen helfen, beim Design einer eigenen KI-gestützten Aktivität didaktisch gut aufgestellt zu sein. Sie kommen aus der Lernforschung, nicht aus KI-Marketing.",
    en: "These seven questions help you design your own AI-supported activity on sound pedagogical ground. They come from learning research, not AI marketing.",
  },
  resources_weitere_title: {
    de: "Weiterführende Ressourcen",
    en: "Further resources",
  },
  resources_weitere_intro: {
    de: "Kuratierte, seriöse Anlaufstellen für weitere Methoden und aktuelle Debatten zur KI in der Hochschullehre.",
    en: "Curated, serious starting points for more methods and current debates on AI in higher education.",
  },

  // Developments page
  dev_title: { de: "KI-Entwicklungen", en: "AI Developments" },
  dev_intro: {
    de: "Eine kuratierte Chronik aktueller KI-Entwicklungen, die für die Hochschul- und Geschichtslehre relevant sind, mit einer Einschätzung, was sie konkret für Daniels Seminar bedeuten.",
    en: "A curated chronicle of current AI developments relevant to higher education and history teaching, with an assessment of what they concretely mean for Daniel's seminar.",
  },
  dev_what: { de: "Was passiert ist", en: "What happened" },
  dev_impact: { de: "Was das für die Lehre bedeutet", en: "What it means for teaching" },
  dev_milestones: { de: "Meilensteine", en: "Milestones" },

  // Weekly News Report
  weekly_title: { de: "Wochenreport", en: "Weekly Report" },
  weekly_intro: {
    de: "Automatisch recherchierter Überblick der letzten sieben Tage aus geprüften Qualitätsquellen (u.a. NZZ, FAZ, Zeit, Guardian, BBC, MIT Technology Review, Chronicle of Higher Ed, Hochschulforum Digitalisierung). Clickbait- und reine PR-Meldungen werden aktiv gefiltert.",
    en: "Automatically researched overview of the past seven days from vetted quality sources (including NZZ, FAZ, Zeit, Guardian, BBC, MIT Technology Review, Chronicle of Higher Ed, Hochschulforum Digitalisierung). Clickbait and pure PR are actively filtered out.",
  },
  weekly_kw: { de: "KW", en: "Week" },
  weekly_sources_checked: { de: "Qualitätsquellen geprüft", en: "Quality sources checked" },
  weekly_filtered: { de: "aussortiert", en: "filtered out" },
  weekly_headlines: { de: "Wichtigste Meldungen", en: "Top stories" },
  weekly_briefs: { de: "Kurz notiert", en: "In brief" },
  weekly_read_original: { de: "Originalartikel lesen", en: "Read original" },
  weekly_empty: {
    de: "Der erste Wochenreport wird automatisch am kommenden Montag um 08:00 Uhr erstellt.",
    en: "The first weekly report will be generated automatically next Monday at 08:00.",
  },
  weekly_archive: { de: "Frühere Wochen", en: "Previous weeks" },
  weekly_generated_at: { de: "Automatisch erstellt am", en: "Automatically generated on" },

  // Resources
  resources_title: { de: "Ressourcen", en: "Resources" },
  resources_intro: {
    de: "Weiterführende Literatur, Leitfäden und praxisorientierte Handreichungen rund um KI in der Hochschullehre.",
    en: "Further literature, guidelines, and practice-oriented resources on AI in higher education.",
  },
  resources_visit: { de: "Quelle öffnen", en: "Open source" },

  // Contact
  contact_title: { de: "Kontakt", en: "Contact" },
  contact_intro: {
    de: "Hast du eine Idee für den Unterricht, willst du einen eigenen Agenten bauen oder brauchst ein Sparring zu KI-Didaktik? Melde dich gern.",
    en: "Have an idea for your teaching, want to build your own agent, or need sparring on AI pedagogy? Get in touch.",
  },
  contact_role: {
    de: "AI-Coach · Abteilung Lehrentwicklung · Universität Zürich",
    en: "AI Coach · Teaching Development Unit · University of Zurich",
  },
  contact_help_title: { de: "Womit ich helfen kann", en: "What I can help with" },
  contact_help_1: {
    de: "Konzeption von KI-Agenten und Custom GPTs für konkrete Lehrszenarien",
    en: "Designing AI agents and custom GPTs for specific teaching scenarios",
  },
  contact_help_2: {
    de: "Prompt-Engineering und Didaktisierung bestehender Tools (M365 Copilot, ChatGPT, Claude)",
    en: "Prompt engineering and pedagogical adaptation of existing tools (M365 Copilot, ChatGPT, Claude)",
  },
  contact_help_3: {
    de: "Bewertungs- und Deklarationskonzepte für KI-Nutzung in Leistungsnachweisen",
    en: "Assessment and declaration frameworks for AI use in graded work",
  },
  contact_help_4: {
    de: "Workshops und 1:1-Coaching für Dozierende",
    en: "Workshops and 1:1 coaching for instructors",
  },

  // Footer
  footer_rights: {
    de: "Abteilung Lehrentwicklung · Universität Zürich",
    en: "Teaching Development Unit · University of Zurich",
  },
  footer_built: {
    de: "Zuletzt aktualisiert: April 2026",
    en: "Last updated: April 2026",
  },
};
