import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { defaultLocale, htmlLang, locales } from './src/i18n/config';

const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        return pathname !== base && !pathname.includes('/_assets/');
      },
      i18n: {
        defaultLocale,
        locales: htmlLang,
      },
    }),
  ],
});
