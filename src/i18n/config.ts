export const locales = ['pt', 'en', 'es', 'fr', 'it'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export const htmlLang: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
  fr: 'fr',
  it: 'it',
};

export const openGraphLocale: Record<Locale, string> = {
  pt: 'pt_BR',
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
  it: 'it_IT',
};

export const localeNames: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
};
