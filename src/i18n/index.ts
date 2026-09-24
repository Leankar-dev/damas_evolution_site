import { locales, type Locale } from './config';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { pt } from './pt';
import type { Dictionary } from './types';

const dictionaries: Record<Locale, Dictionary> = { pt, en, es, fr, it };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export const isLocale = (value: string | undefined): value is Locale =>
  locales.some((locale) => locale === value);

export const withBase = (path: string): string =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

export const localizedPath = (locale: Locale, page = ''): string => withBase(`/${locale}/${page}`);

export const requireLocale = (value: string | undefined): Locale => {
  if (!isLocale(value)) {
    throw new Error(`Unsupported locale: ${value ?? 'undefined'}`);
  }
  return value;
};

export const getLocalePaths = () => locales.map((lang) => ({ params: { lang } }));
