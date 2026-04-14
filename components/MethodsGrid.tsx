"use client";

import { useState } from "react";
import { methods, type MethodCategory } from "@/data/methods";
import { useI18n } from "./I18nProvider";
import { ui } from "@/data/translations";
import { t } from "@/lib/i18n";

const categories: Array<{ id: MethodCategory | "all"; key: keyof typeof ui }> = [
  { id: "all", key: "methods_filter_all" },
  { id: "critique", key: "cat_critique" },
  { id: "socratic", key: "cat_socratic" },
  { id: "historiography", key: "cat_historiography" },
];

export default function MethodsGrid() {
  const { lang } = useI18n();
  const [filter, setFilter] = useState<MethodCategory | "all">("all");

  const filtered = filter === "all" ? methods : methods.filter((m) => m.category === filter);

  const difficultyLabel = (d: "easy" | "medium" | "hard") => {
    if (d === "easy") return t(ui.difficulty_easy, lang);
    if (d === "medium") return t(ui.difficulty_medium, lang);
    return t(ui.difficulty_hard, lang);
  };

  const difficultyColor = (d: "easy" | "medium" | "hard") => {
    if (d === "easy") return "bg-green-50 text-green-800 border-green-200";
    if (d === "medium") return "bg-amber-50 text-amber-800 border-amber-200";
    return "bg-red-50 text-red-800 border-red-200";
  };

  const categoryLabel = (c: MethodCategory) => {
    if (c === "critique") return t(ui.cat_critique, lang);
    if (c === "socratic") return t(ui.cat_socratic, lang);
    return t(ui.cat_historiography, lang);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setFilter(c.id)}
            className={`px-4 py-2 text-sm font-medium rounded-sm border transition-colors ${
              filter === c.id
                ? "bg-uzh-blue text-white border-uzh-blue"
                : "bg-white text-uzh-blue border-uzh-blue hover:bg-uzh-blue-light"
            }`}
          >
            {t(ui[c.key], lang)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((m, i) => (
          <article
            key={m.id}
            className="border border-gray-200 rounded-sm p-6 hover:border-uzh-blue transition-colors flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-semibold text-uzh-blue leading-tight">
                {i + 1}. {t(m.title, lang)}
              </h3>
              <span
                className={`shrink-0 text-xs px-2 py-1 rounded-sm border ${difficultyColor(m.difficulty)}`}
              >
                {difficultyLabel(m.difficulty)}
              </span>
            </div>

            <div className="text-xs text-uzh-gray mb-4 flex flex-wrap gap-x-4 gap-y-1">
              <span>
                <strong className="text-uzh-blue">{t(ui.methods_category, lang)}:</strong>{" "}
                {categoryLabel(m.category)}
              </span>
              <span>
                <strong className="text-uzh-blue">{t(ui.methods_bloom, lang)}:</strong>{" "}
                {t(m.bloomLabel, lang)}
              </span>
            </div>

            <div className="mb-4">
              <h4 className="text-xs uppercase tracking-wide font-semibold text-uzh-gray mb-1">
                {t(ui.methods_problem, lang)}
              </h4>
              <p className="text-sm text-gray-800 leading-relaxed">{t(m.problem, lang)}</p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wide font-semibold text-uzh-gray mb-1">
                {t(ui.methods_design, lang)}
              </h4>
              <p className="text-sm text-gray-800 leading-relaxed">{t(m.design, lang)}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
