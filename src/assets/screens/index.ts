import type { ImageMetadata } from 'astro';
import type { Locale } from '../../i18n/config';
import { defaultLocale } from '../../i18n/config';
import list from './screens.json';

const modules = import.meta.glob<{ default: ImageMetadata }>('./*/*.jpg', { eager: true });

export const capturedScreens: readonly string[] = list.captured;
export const placeholderScreens: readonly string[] = list.placeholders;
export const allScreens: readonly string[] = [...capturedScreens, ...placeholderScreens];
export const localizedScreens: readonly string[] = ['home', 'difficulty', 'game'];

const key = (name: string, locale: Locale): string => `./${locale}/${name}.jpg`;

export const hasScreen = (name: string, locale: Locale): boolean => key(name, locale) in modules;

export const getScreen = (name: string, locale: Locale): ImageMetadata => {
  const found = modules[key(name, locale)] ?? modules[key(name, defaultLocale)];
  if (!found) {
    throw new Error(`Missing screen: ${name}`);
  }
  return found.default;
};

export const isPlaceholderScreen = (name: string): boolean => placeholderScreens.includes(name);

export const availableScreen = (preferred: string, fallback: string): string =>
  isPlaceholderScreen(preferred) ? fallback : preferred;

export const toCamelCase = (name: string): string =>
  name.replace(/-(\w)/g, (_, letter: string) => letter.toUpperCase());
