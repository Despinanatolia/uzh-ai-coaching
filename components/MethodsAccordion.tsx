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

export default function MethodsAccordion() {
  const { lang } = useI18n();
  const [filter, setFilter] = useState<MethodCategory | "all">("all");
  const [openId, setOpenId] = useState<string | null>(null);

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

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
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

      <div className="flex flex-col gap-3">
        {filtered.map((m, i) => {
          const isOpen = openId === m.id;
          return (
            <article
              key={m.id}
              className={`border rounded-sm transition-colors ${
                isOpen ? "border-uzh-blue" : "border-gray-200 hover:border-uzh-blue"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(m.id)}
                aria-expanded={isOpen}
                className="w-full flex items-start justify-between gap-4 p-5 text-left"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-uzh-blue leading-tight">
                    {i + 1}. {t(m.title, lang)}
                  </h3>
                  <div className="text-xs text-uzh-gray mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    <span>
                      <strong className="text-uzh-blue">{t(ui.methods_category, lang)}:</strong>{" "}
                      {categoryLabel(m.category)}
                    </span>
                    <span>
                      <strong className="text-uzh-blue">{t(ui.methods_bloom, lang)}:</strong>{" "}
                      {t(m.bloomLabel, lang)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`text-xs px-2 py-1 rounded-sm border ${difficultyColor(m.difficulty)}`}
                  >
                    {difficultyLabel(m.difficulty)}
                  </span>
                  <span
                    aria-hidden
                    className={`text-uzh-blue text-2xl leading-none transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 border-t border-gray-100 pt-4 space-y-5">
                  <div>
                    <h4 className="text-xs uppercase tracking-wide font-semibold text-uzh-gray mb-2">
                      {t(ui.methods_problem, lang)}
                    </h4>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                      {t(m.problem, lang)}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wide font-semibold text-uzh-gray mb-2">
                      {t(ui.methods_design, lang)}
                    </h4>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                      {t(m.design, lang)}
                    </p>
                  </div>

                  {m.research && (
                    <div className="bg-uzh-blue-light p-4 rounded-sm">
                      <h4 className="text-xs uppercase tracking-wide font-semibold text-uzh-blue mb-2">
                        {t(ui.methods_research_more, lang)}
                      </h4>
                      <p className="text-sm text-gray-800 leading-relaxed mb-2">
                        {t(m.research.citation, lang)}
                      </p>
                      <a
                        href={m.research.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-uzh-blue font-medium hover:underline underline-offset-4 break-all"
                      >
                        {m.research.url} ↗
                      </a>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
