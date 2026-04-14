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
