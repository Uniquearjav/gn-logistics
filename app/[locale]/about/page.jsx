import { setRequestLocale } from 'next-intl/server';
import { AboutContent } from '@/components/sections/about-content';
import { CtaBand } from '@/components/sections/cta-band';
import { SITE_CONFIG } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    title: messages.about.heading,
    description: messages.about.intro,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        de: '/de/about',
        en: '/en/about',
      },
    },
    openGraph: {
      title: `${messages.about.heading} | ${SITE_CONFIG.name}`,
      description: messages.about.intro,
      url: `/${locale}/about`,
    },
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutContent />
      <CtaBand />
    </>
  );
}
