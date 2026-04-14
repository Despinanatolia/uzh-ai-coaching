"use client";

import { useI18n } from "@/components/I18nProvider";
import { ui } from "@/data/translations";
import { t } from "@/lib/i18n";
import { resources, resourceCategoryLabels, type ResourceCategory } from "@/data/resources";

const order: ResourceCategory[] = ["guidelines", "frameworks", "practice", "research"];

export default function ResourcesPage() {
  const { lang } = useI18n();

  const grouped = order.map((cat) => ({
    cat,
    items: resources.filter((r) => r.category === cat),
  }));

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-wide text-uzh-blue font-semibold mb-4">
        Library
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold text-uzh-blue mb-6">
        {t(ui.resources_title, lang)}
      </h1>
      <p className="text-lg text-gray-800 max-w-3xl leading-relaxed mb-14">
        {t(ui.resources_intro, lang)}
      </p>

      <div className="space-y-14">
        {grouped.map((group) => (
          <section key={group.cat}>
            <h2 className="text-xl font-semibold text-uzh-blue border-b border-uzh-blue-light pb-2 mb-6">
              {t(resourceCategoryLabels[group.cat], lang)}
            </h2>
            <ul className="space-y-6">
              {group.items.map((r) => (
                <li key={r.id} className="grid md:grid-cols-4 gap-4 md:gap-8">
                  <div className="md:col-span-1">
                    <p className="text-sm font-semibold text-gray-900">{t(r.author, lang)}</p>
                    <p className="text-sm text-uzh-gray">{r.year}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-lg font-semibold text-uzh-blue leading-tight mb-1">
                      {t(r.title, lang)}
                    </h3>
                    <p className="text-gray-800 leading-relaxed mb-2">{t(r.description, lang)}</p>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-uzh-blue font-medium hover:underline underline-offset-4"
                    >
                      {t(ui.resources_visit, lang)} ↗
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
