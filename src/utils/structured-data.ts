import { site } from '../config/site';
import { getDictionary, localizedPath, withBase } from '../i18n';
import { htmlLang, locales, type Locale } from '../i18n/config';

export type StructuredData = Record<string, unknown>;

interface Crumb {
  name: string;
  page: string;
}

const absolute = (origin: URL | string, path: string): string => new URL(path, origin).href;

export const breadcrumbList = (
  origin: URL | string,
  locale: Locale,
  crumbs: Crumb[],
): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: absolute(origin, localizedPath(locale, crumb.page)),
  })),
});

export const videoGame = (origin: URL | string, locale: Locale): StructuredData => {
  const stores = [site.googlePlayUrl, site.windowsStoreUrl].filter(
    (url): url is string => url !== null,
  );
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: site.name,
    description: getDictionary(locale).meta.homeDescription,
    url: absolute(origin, localizedPath(locale)),
    image: absolute(origin, withBase('/og-image.jpg')),
    applicationCategory: 'GameApplication',
    operatingSystem: 'Android, Windows',
    gamePlatform: ['Android', 'Windows'],
    playMode: ['https://schema.org/SinglePlayer', 'https://schema.org/MultiPlayer'],
    softwareVersion: site.appVersion,
    inLanguage: locales.map((candidate) => htmlLang[candidate]),
    author: { '@type': 'Organization', name: site.author, url: site.developerUrl },
    ...(stores.length > 0 && {
      offers: stores.map((url) => ({ '@type': 'Offer', url })),
    }),
  };
};
