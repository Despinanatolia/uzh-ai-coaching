"use client";

import { leitfragen, methodResources } from "@/data/method-resources";
import { useI18n } from "./I18nProvider";
import { ui } from "@/data/translations";
import { t } from "@/lib/i18n";

export default function LeitfragenAndResources() {
  const { lang } = useI18n();

  return (
    <div className="mt-20 grid lg:grid-cols-2 gap-10 pt-12 border-t border-gray-200">
      <section>
        <h2 className="text-2xl font-semibold text-uzh-blue mb-2">
          {t(ui.leitfragen_title, lang)}
        </h2>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          {t(ui.leitfragen_intro, lang)}
        </p>
        <ol className="space-y-4">
          {leitfragen.map((q, i) => (
            <li
              key={q.id}
              className="border-l-2 border-uzh-blue pl-4 py-1"
            >
              <p className="text-sm font-semibold text-uzh-blue mb-1">
                {i + 1}. {t(q.question, lang)}
              </p>
              <p className="text-xs text-uzh-gray italic leading-relaxed">
                {t(q.hint, lang)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-uzh-blue mb-2">
          {t(ui.resources_weitere_title, lang)}
        </h2>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          {t(ui.resources_weitere_intro, lang)}
        </p>
        <ul className="space-y-3">
          {methodResources.map((r) => (
            <li
              key={r.id}
              className="border border-gray-200 rounded-sm p-4 hover:border-uzh-blue transition-colors"
            >
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="text-sm font-semibold text-uzh-blue hover:underline">
                  {t(r.label, lang)}
                </p>
                <p className="text-xs text-uzh-gray mb-1">{r.org}</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {t(r.description, lang)}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
