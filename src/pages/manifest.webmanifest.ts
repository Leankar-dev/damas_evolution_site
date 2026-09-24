import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { withBase } from '../i18n';

export const GET: APIRoute = () => {
  const manifest = {
    name: site.name,
    short_name: site.name,
    lang: 'pt-BR',
    start_url: withBase('/'),
    scope: withBase('/'),
    display: 'browser',
    background_color: '#f0e6c8',
    theme_color: '#f0e6c8',
    icons: [
      {
        src: withBase('/favicon.svg'),
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      { src: withBase('/icon-192.png'), sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: withBase('/icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'any' },
      {
        src: withBase('/icon-maskable-512.png'),
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
  return new Response(JSON.stringify(manifest), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
