import { setRequestLocale } from 'next-intl/server';
import { ServicesContent } from '@/components/sections/services-content';
import { CtaBand } from '@/components/sections/cta-band';
import { SITE_CONFIG } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    title: messages.services.heading,
    description: messages.services.intro,
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        de: '/de/services',
        en: '/en/services',
      },
    },
    openGraph: {
      title: `${messages.services.heading} | ${SITE_CONFIG.name}`,
      description: messages.services.intro,
      url: `/${locale}/services`,
    },
  };
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ServicesContent />
      <CtaBand />
    </>
  );
}
