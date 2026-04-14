import type { LocalizedString } from "@/lib/i18n";

export type Development = {
  id: string;
  date: string; // ISO format
  dateLabel: LocalizedString;
  title: LocalizedString;
  what: LocalizedString;
  impact: LocalizedString;
  link?: { url: string; label: LocalizedString };
};

export const developments: Development[] = [
  {
    id: "claude-sonnet-4-6-long-context",
    date: "2026-04-08",
    dateLabel: { de: "April 2026", en: "April 2026" },
    title: {
      de: "Claude Sonnet 4.6 mit 1-Million-Token-Kontextfenster (Beta)",
      en: "Claude Sonnet 4.6 launches 1M token context window (beta)",
    },
    what: {
      de: "Anthropic hat mit Claude Sonnet 4.6 sein aktuelles Mittelklasse-Modell aktualisiert. Neu ist ein 1-Million-Token-Kontextfenster in der Beta-Phase, kombiniert mit verbesserter agentischer Suche und «Extended Thinking». Parallel wurde Claude Mythos Preview vorgestellt, aber nur einem geschlossenen Kreis von Technologieunternehmen im Rahmen von «Project Glasswing» zugänglich gemacht.",
      en: "Anthropic has updated its mid-tier model with Claude Sonnet 4.6. New is a 1-million-token context window (beta), combined with improved agentic search and «extended thinking». In parallel, Anthropic disclosed Claude Mythos Preview, but restricted access to a closed consortium via «Project Glasswing».",
    },
    impact: {
      de: "Für Daniels Seminararbeit praktisch relevant: Mit 1M Tokens lassen sich ganze Monographien oder umfangreiche Quelleneditionen in einem Prompt verarbeiten, ohne Chunking. Für geisteswissenschaftliches Arbeiten ist das besonders wertvoll, wenn Studierende etwa eine Primärquelle zusammen mit der Sekundärliteratur analysieren lassen wollen. Die eingeschränkte Veröffentlichung von Mythos zeigt zugleich einen Trend: leistungsstärkere Modelle werden selektiv ausgerollt — für die Lehre wird mittelfristig nicht immer das neueste Modell zugänglich sein.",
      en: "Practically relevant for Daniel's seminar: 1M tokens allow entire monographs or large source editions to be processed in a single prompt, without chunking. Especially valuable in the humanities when students want to analyse a primary source together with secondary literature. The restricted release of Mythos reveals a trend: more powerful models are rolled out selectively — for teaching, the latest model won't always be accessible in the medium term.",
    },
    link: {
      url: "https://www.anthropic.com/news",
      label: { de: "Anthropic News öffnen", en: "Open Anthropic news" },
    },
  },
  {
    id: "canvas-igniteai-agent",
    date: "2026-03-23",
    dateLabel: { de: "März 2026", en: "March 2026" },
    title: {
      de: "Canvas lanciert «IgniteAI» – KI-Agent für Lehrende im LMS",
      en: "Canvas launches «IgniteAI» – AI teaching agent in the LMS",
    },
    what: {
      de: "Instructure, Betreiber des weltweit verbreiteten LMS Canvas, hat IgniteAI veröffentlicht. Der Agent automatisiert nach Anbieterangaben «niedrigwertige» Aufgaben wie Rubric-Erstellung, Content-Alignment und die Durchsicht von Forumsbeiträgen. Ziel sei es, Lehrenden mehr Zeit für Mentoring und individuelles Feedback zu verschaffen.",
      en: "Instructure, operator of the widely-used LMS Canvas, has released IgniteAI. The agent automates what it describes as «low-value» tasks such as rubric generation, content alignment, and review of discussion contributions. The stated goal is to free up teaching time for mentoring and individual feedback.",
    },
    impact: {
      de: "Die UZH nutzt OLAT, nicht Canvas, aber die Richtung ist eindeutig: LMS-Anbieter bauen KI-Agenten direkt in die Lernplattform ein und verschieben damit die Frage «Nutze ich KI im Unterricht?» hin zu «Welche LMS-internen KI-Funktionen akzeptiere ich?». Für Daniels Coaching interessant als Gesprächsanlass: Was würde eine automatische Rubric-Erstellung für sein Moldau-Seminar bedeuten — Zeitgewinn oder Verlust didaktischer Schärfe? Das Thema wird in den kommenden Monaten auch in OLAT- und ILIAS-Diskussionen auftauchen.",
      en: "UZH uses OLAT, not Canvas, but the direction is clear: LMS vendors are embedding AI agents directly into the learning platform, shifting the question from «Do I use AI in class?» to «Which LMS-built-in AI features do I accept?». Useful for Daniel's coaching as a discussion prompt: what would automatic rubric generation mean for his Moldau seminar — time saved or loss of didactic sharpness? The topic will appear in OLAT and ILIAS discussions within the coming months.",
    },
    link: {
      url: "https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/03/23/canvas-unrolls-ai-teaching-agent",
      label: { de: "Inside Higher Ed öffnen", en: "Open Inside Higher Ed" },
    },
  },
  {
    id: "schmidt-sciences-humanities-ai",
    date: "2026-03-13",
    dateLabel: { de: "März 2026", en: "March 2026" },
    title: {
      de: "Schmidt Sciences: 11 Mio. USD für KI in den Geisteswissenschaften",
      en: "Schmidt Sciences: $11M for AI in the humanities",
    },
    what: {
      de: "Schmidt Sciences hat eine neue Förderrunde im Rahmen des «Humanities and AI Virtual Institute» angekündigt. Gefördert werden unter anderem die Analyse mittelalterlicher Handschriften, archäologische Spurensuche anhand von Satellitenbildern sowie mehrsprachige Modelle für nicht-englische Quellenkorpora.",
      en: "Schmidt Sciences has announced a new funding round under the «Humanities and AI Virtual Institute». Supported areas include medieval manuscript analysis, archaeological discovery via satellite imagery, and multilingual models for non-English source corpora.",
    },
    impact: {
      de: "Für Daniel als Osteuropa-Historiker doppelt relevant: (1) Die Förderung mehrsprachiger Modelle adressiert direkt ein Kernproblem seines Forschungsfelds — dominante LLMs sind auf westeuropäischen und englischsprachigen Korpora trainiert und reproduzieren so eine Schieflage in der historiographischen Darstellung. (2) Die geförderten Projekte werden in den nächsten Jahren Werkzeuge produzieren, die auch im Seminar einsetzbar sein werden (z.B. Handschriftenerkennung für kyrillische oder rumänische Quellen). Die Projektliste lohnt sich zu verfolgen.",
      en: "Doubly relevant for Daniel as an Eastern European historian: (1) Funding for multilingual models directly addresses a core problem of his field — dominant LLMs are trained on Western European and English-language corpora and reproduce a bias in historiographical representation. (2) Funded projects will produce tools usable in teaching over the coming years (e.g. handwriting recognition for Cyrillic or Romanian sources). Worth keeping an eye on the project list.",
    },
    link: {
      url: "https://www.schmidtsciences.org/humanities-and-ai-virtual-institute/",
      label: { de: "Schmidt Sciences öffnen", en: "Open Schmidt Sciences" },
    },
  },
  {
    id: "google-educator-training",
    date: "2026-04-02",
    dateLabel: { de: "April 2026", en: "April 2026" },
    title: {
      de: "Google startet kostenloses KI-Training für Lehrende",
      en: "Google launches free AI training for educators",
    },
    what: {
      de: "Google for Education rollt ein kostenfreies, modulares Fortbildungsangebot aus, das Lehrende aller Stufen befähigen soll, KI sicher und produktiv in ihren Unterricht zu integrieren. Die Module reichen von prompt-literacy bis zur KI-gestützten Leistungsbewertung.",
      en: "Google for Education is rolling out a free, modular training offering designed to enable teachers at all levels to integrate AI safely and productively. Modules range from prompt literacy to AI-assisted assessment.",
    },
    impact: {
      de: "Die Qualität freier Fortbildungsangebote steigt rapide — Dozierende müssen nicht auf universitätsinterne Kurse warten. Für Daniels Seminar interessant: einzelne Module (insb. zu Prompt-Design und Assessment) können als Vorbereitung für das eigene Coaching oder als Selbstlern-Ressource für Studierende eingesetzt werden.",
      en: "The quality of free training is rising fast — instructors don't have to wait for in-house university courses. Relevant for Daniel's seminar: individual modules (especially prompt design and assessment) can be used as preparation for coaching or as a self-study resource for students.",
    },
  },
  {
    id: "boston-ai-literacy-mandate",
    date: "2026-02-15",
    dateLabel: { de: "Februar 2026", en: "February 2026" },
    title: {
      de: "Boston macht KI-Kompetenz zur Abschlussvoraussetzung",
      en: "Boston mandates AI literacy for graduation",
    },
    what: {
      de: "Die Bostoner Schulbehörde hat als erste grössere US-Stadt beschlossen, dass ab Jahrgang 2027 ein nachweisbarer KI-Kompetenz-Baustein Abschlussvoraussetzung ist. Der Beschluss ist Teil eines breiteren Trends auf K-12-Ebene, bei dem KI-Literacy neben Digital Literacy eigenständig verankert wird.",
      en: "The Boston school authority became the first major US city to decide that a demonstrable AI literacy component will be a graduation requirement starting with the class of 2027. The decision is part of a broader K-12 trend in which AI literacy is being anchored as a standalone competency alongside digital literacy.",
    },
    impact: {
      de: "Studierende, die in den kommenden Jahren an die Universität kommen, werden zunehmend KI-vertraut sein — aber nicht notwendigerweise KI-kritisch. Die Universität muss ihre Lehre auf ein neues Vorwissen einstellen: weniger «Was kann KI?», mehr «Wann darf ich KI nicht nutzen, und warum nicht?».",
      en: "Students entering university in coming years will be increasingly AI-familiar — but not necessarily AI-critical. University teaching needs to adjust to new prior knowledge: less \"What can AI do?\", more \"When must I not use AI, and why not?\".",
    },
  },
  {
    id: "oecd-digital-outlook-2026",
    date: "2026-01-28",
    dateLabel: { de: "Januar 2026", en: "January 2026" },
    title: {
      de: "OECD Digital Education Outlook 2026",
      en: "OECD Digital Education Outlook 2026",
    },
    what: {
      de: "Die OECD hat ihren jährlichen Outlook zur digitalen Bildung veröffentlicht, diesmal mit einem ausgedehnten Kapitel zu generativer KI. Zentraler Befund: Die grosse Kluft verläuft nicht zwischen Institutionen mit und ohne KI, sondern zwischen solchen mit und ohne eine pädagogische Strategie dafür.",
      en: "The OECD has published its annual Digital Education Outlook, this edition with an extensive chapter on generative AI. Core finding: the decisive divide isn't between institutions with and without AI, but between those with and without a pedagogical strategy for it.",
    },
    impact: {
      de: "Der Bericht bestätigt, wofür das Coaching-Programm an der UZH steht: Technologie allein genügt nicht, es braucht didaktische Rahmung. Für einzelne Dozierende wie Daniel ist der Bericht nützlich als Argumentationsgrundlage gegenüber Skeptikern und als Bestätigung, dass strukturierte Prompt- und Agent-Entwicklung kein Luxus, sondern Standard wird.",
      en: "The report confirms what the coaching program at UZH stands for: technology alone isn't enough, pedagogical framing is essential. For individual instructors like Daniel, the report is useful as an argument toward skeptics and confirmation that structured prompt and agent development is becoming standard, not a luxury.",
    },
  },
  {
    id: "aha-ai-guidelines",
    date: "2025-08-10",
    dateLabel: { de: "August 2025", en: "August 2025" },
    title: {
      de: "AHA Guiding Principles für KI in der Geschichtslehre",
      en: "AHA Guiding Principles for AI in History Education",
    },
    what: {
      de: "Die American Historical Association hat ausführliche Leitlinien für den Einsatz generativer KI in der Geschichtslehre veröffentlicht. Kernpunkte: KI-Modelle erfinden historische Quellen, reproduzieren westliche Narrative und können weder Quellenkritik noch historiographisches Urteil ersetzen. Der Einsatz solle nicht verboten, aber transparent deklariert und kritisch reflektiert werden.",
      en: "The American Historical Association has published extensive guidelines on the use of generative AI in history education. Key points: AI models fabricate historical sources, reproduce Western narratives, and cannot replace source criticism or historiographical judgment. Use should not be banned but transparently declared and critically reflected on.",
    },
    impact: {
      de: "Die AHA-Leitlinien sind die bisher präziseste fachdisziplinäre Handreichung für Daniels Kontext. Drei konkrete Punkte sind direkt für das Moldau-Seminar anschlussfähig: (1) obligatorische Verifikation KI-generierter Literaturhinweise, (2) Reflexion der historiographischen Voreingenommenheit von Modellen (besonders relevant bei osteuropäischer Geschichte), (3) KI nicht als Quelle behandeln, sondern als Werkzeug mit sichtbarer Autorenschaft.",
      en: "The AHA guidelines are the most precise discipline-specific resource for Daniel's context so far. Three concrete points are directly connectable to the Moldau seminar: (1) mandatory verification of AI-generated references, (2) reflection on models' historiographical bias (especially relevant for Eastern European history), (3) treating AI not as a source but as a tool with visible authorship.",
    },
    link: {
      url: "https://www.historians.org/resource/guiding-principles-for-artificial-intelligence-in-history-education/",
      label: { de: "AHA-Leitlinien öffnen", en: "Open AHA guidelines" },
    },
  },
];
