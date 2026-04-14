"use client";

import { useState } from "react";
import { bloomLevels } from "@/data/bloom";
import { useI18n } from "./I18nProvider";
import { ui } from "@/data/translations";
import { t } from "@/lib/i18n";

export default function BloomPyramid() {
  const { lang } = useI18n();
  const [selectedId, setSelectedId] = useState<string>("create");

  const selected = bloomLevels.find((l) => l.id === selectedId);

  // Pyramid geometry: 6 tiers stacked. Top tier narrowest.
  // SVG viewbox 600 x 420. Tier height ~60. Top inset per tier ~40.
  const TIER_HEIGHT = 60;
  const TIER_COUNT = 6;
  const CENTER_X = 300;
  // Sorted top (Create=6) -> bottom (Remember=1)
  const ordered = [...bloomLevels].sort((a, b) => b.order - a.order);

  return (
    <div className="grid lg:grid-cols-5 gap-10 items-start">
      <div className="lg:col-span-2">
        <svg
          viewBox="0 0 600 420"
          className="w-full h-auto max-w-md mx-auto"
          role="img"
          aria-label="Bloom-Taxonomie Pyramide"
        >
          {ordered.map((level, i) => {
            // i=0 is top tier (Create)
            const topY = i * TIER_HEIGHT;
            const bottomY = topY + TIER_HEIGHT;
            // Each tier is a trapezoid. Width grows from top to bottom.
            // Top of tier at (i), half-width = 40 + i * 40
            const topHalfWidth = 40 + i * 40;
            const bottomHalfWidth = 40 + (i + 1) * 40;
            const isSelected = selectedId === level.id;

            const points = [
              [CENTER_X - topHalfWidth, topY],
              [CENTER_X + topHalfWidth, topY],
              [CENTER_X + bottomHalfWidth, bottomY],
              [CENTER_X - bottomHalfWidth, bottomY],
            ]
              .map((p) => p.join(","))
              .join(" ");

            return (
              <g
                key={level.id}
                onClick={() => setSelectedId(level.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedId(level.id);
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={t(level.name, lang)}
                className="cursor-pointer outline-none"
              >
                <polygon
                  points={points}
                  fill={level.color}
                  fillOpacity={isSelected ? 1 : 0.78}
                  stroke="#ffffff"
                  strokeWidth={2}
                  className="transition-all"
                  style={{
                    filter: isSelected ? "drop-shadow(0 2px 6px rgba(0,40,165,0.4))" : "none",
                  }}
                />
                <text
                  x={CENTER_X}
                  y={topY + TIER_HEIGHT / 2 + 5}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize={16}
                  fontWeight={600}
                  pointerEvents="none"
                >
                  {level.order}. {t(level.name, lang)}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="text-xs text-uzh-gray text-center mt-4 max-w-md mx-auto">
          {lang === "de"
            ? "Unten: einfache kognitive Prozesse · Oben: komplexe, eigenständige Kreation"
            : "Bottom: simple cognitive processes · Top: complex, original creation"}
        </p>
      </div>

      <div className="lg:col-span-3">
        {selected ? (
          <article className="border-l-4 pl-6 py-2" style={{ borderColor: selected.color }}>
            <p className="text-xs uppercase tracking-wide text-uzh-gray mb-1">
              {lang === "de" ? "Stufe" : "Level"} {selected.order} ·{" "}
              <span className="italic">{t(selected.verb, lang)}</span>
            </p>
            <h3 className="text-3xl font-semibold mb-6" style={{ color: selected.color }}>
              {t(selected.name, lang)}
            </h3>

            <section className="mb-6">
              <h4 className="text-sm uppercase tracking-wide font-semibold text-uzh-blue mb-2">
                {t(ui.bloom_what_ai, lang)}
              </h4>
              <p className="leading-relaxed text-gray-800">{t(selected.whatAi, lang)}</p>
            </section>

            <section className="mb-6 bg-uzh-blue-light p-5 rounded-sm">
              <h4 className="text-sm uppercase tracking-wide font-semibold text-uzh-blue mb-2">
                {t(ui.bloom_activity, lang)}
              </h4>
              <p className="leading-relaxed text-gray-900">{t(selected.activity, lang)}</p>
            </section>

            <section className="border-l-2 border-orange-400 pl-4">
              <h4 className="text-sm uppercase tracking-wide font-semibold text-orange-700 mb-2">
                ⚠ {t(ui.bloom_warning, lang)}
              </h4>
              <p className="leading-relaxed text-gray-800">{t(selected.warning, lang)}</p>
            </section>
          </article>
        ) : (
          <p className="text-uzh-gray italic">{t(ui.bloom_select_prompt, lang)}</p>
        )}
      </div>
    </div>
  );
}
