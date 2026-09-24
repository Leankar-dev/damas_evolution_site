interface SiteConfig {
  name: string;
  author: string;
  signature: string;
  email: string;
  developerUrl: string;
  appVersion: string;
  copyrightYear: number;
  googlePlayUrl: string | null;
  windowsStoreUrl: string | null;
}

export const site: SiteConfig = {
  name: 'Damas Evolution',
  author: 'Leankar.dev',
  signature: 'by leankar.dev',
  email: 'leankar.dev@gmail.com',
  developerUrl: 'https://leankar.dev',
  appVersion: '1.0.0',
  copyrightYear: 2026,
  googlePlayUrl: null,
  windowsStoreUrl: null,
};
