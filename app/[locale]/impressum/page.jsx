import { setRequestLocale } from 'next-intl/server';
import { ImpressumContent } from '@/components/sections/impressum-content';
import { SITE_CONFIG } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    title: messages.impressum.heading,
    description: messages.impressum.sec1.company,
    alternates: {
      canonical: `/${locale}/impressum`,
      languages: {
        de: '/de/impressum',
        en: '/en/impressum',
      },
    },
    openGraph: {
      title: `${messages.impressum.heading} | ${SITE_CONFIG.name}`,
      description: messages.impressum.sec1.company,
      url: `/${locale}/impressum`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function ImpressumPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ImpressumContent />;
}
