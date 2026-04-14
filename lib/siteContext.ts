import { methods } from "@/data/methods";
import { bloomLevels } from "@/data/bloom";
import { developments } from "@/data/developments";
import { resources } from "@/data/resources";
import type { Lang } from "./i18n";

/**
 * Builds a compact string representation of all website content
 * in the requested language, to be used as system-prompt context
 * for the chat agent.
 */
export function buildSiteContext(lang: Lang): string {
  const parts: string[] = [];

  parts.push("# UZH AI Coaching Toolkit – Website-Inhalte\n");
  parts.push(
    "Diese Website ist ein didaktisches Toolkit für Prof. Daniel Ursprung (Historisches Seminar, UZH). " +
      "Betreut wird sie von Despina Fidanoglu, AI-Coach an der Abteilung Lehrentwicklung. " +
      "Kontakt: despina.fidanoglu@uzh.ch\n"
  );

  parts.push("\n## Methoden (8 Unterrichtsmethoden)\n");
  methods.forEach((m, i) => {
    parts.push(`\n### ${i + 1}. ${m.title[lang]}`);
    parts.push(`Kategorie: ${m.category} · Bloom: ${m.bloomLabel[lang]} · Schwierigkeit: ${m.difficulty}`);
    parts.push(`Problem: ${m.problem[lang]}`);
    parts.push(`Aktivität: ${m.design[lang]}`);
    if (m.research) {
      parts.push(`Forschung: ${m.research.citation[lang]} (${m.research.url})`);
    }
  });

  parts.push("\n\n## Bloom-Taxonomie (6 Stufen mit KI-Bezug)\n");
  bloomLevels.forEach((b) => {
    parts.push(`\n### ${b.name[lang]} (${b.verb[lang]})`);
    parts.push(`Was KI hier kann: ${b.whatAi[lang]}`);
    parts.push(`Aktivität: ${b.activity[lang]}`);
    parts.push(`Vorsicht: ${b.warning[lang]}`);
  });

  parts.push("\n\n## Aktuelle KI-Entwicklungen\n");
  developments.slice(0, 10).forEach((d) => {
    parts.push(`\n### ${d.dateLabel[lang]}: ${d.title[lang]}`);
    parts.push(`Was passiert ist: ${d.what[lang]}`);
    parts.push(`Bedeutung für die Lehre: ${d.impact[lang]}`);
    if (d.link) parts.push(`Link: ${d.link.url}`);
  });

  parts.push("\n\n## Ressourcen (externe Quellen)\n");
  resources.forEach((r) => {
    parts.push(`- ${r.title[lang]} (${r.author[lang]}, ${r.year}): ${r.description[lang]} – ${r.url}`);
  });

  return parts.join("\n");
}
