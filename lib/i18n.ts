export type Lang = "de" | "en";

export const DEFAULT_LANG: Lang = "de";

export type LocalizedString = { de: string; en: string };

export function t(value: LocalizedString, lang: Lang): string {
  return value[lang];
}
