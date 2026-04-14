"use client";

import { useI18n } from "@/components/I18nProvider";
import { ui } from "@/data/translations";
import { t } from "@/lib/i18n";
import { developments } from "@/data/developments";

export default function DevelopmentsPage() {
  const { lang } = useI18n();
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-wide text-uzh-blue font-semibold mb-4">
        Tracker
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold text-uzh-blue mb-6">
        {t(ui.dev_title, lang)}
      </h1>
      <p className="text-lg text-gray-800 max-w-3xl leading-relaxed mb-14">
        {t(ui.dev_intro, lang)}
      </p>

      <ol className="relative border-l-2 border-uzh-blue-light ml-3 space-y-12">
        {developments.map((d) => (
          <li key={d.id} className="relative pl-8">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-uzh-blue border-4 border-white shadow-sm" />
            <p className="text-sm text-uzh-blue font-semibold mb-1">{t(d.dateLabel, lang)}</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 leading-tight">
              {t(d.title, lang)}
            </h2>

            <div className="mb-4">
              <h3 className="text-xs uppercase tracking-wide font-semibold text-uzh-gray mb-1">
                {t(ui.dev_what, lang)}
              </h3>
              <p className="text-gray-800 leading-relaxed">{t(d.what, lang)}</p>
            </div>

            <div className="bg-uzh-blue-light p-5 rounded-sm mb-3">
              <h3 className="text-xs uppercase tracking-wide font-semibold text-uzh-blue mb-1">
                {t(ui.dev_impact, lang)}
              </h3>
              <p className="text-gray-900 leading-relaxed">{t(d.impact, lang)}</p>
            </div>

            {d.link && (
              <a
                href={d.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 text-sm text-uzh-blue font-medium hover:underline underline-offset-4"
              >
                {t(d.link.label, lang)} ↗
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
