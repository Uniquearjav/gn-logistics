import { SITE_CONFIG } from '@/lib/site';

export default function sitemap() {
  const baseUrl = SITE_CONFIG.url;
  const locales = ['de', 'en'];
  const routes = ['', '/about', '/services', '/impressum'];

  const entries = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/impressum' ? 0.3 : 0.8,
        alternates: {
          languages: {
            de: `${baseUrl}/de${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    });
  });

  return entries;
}
