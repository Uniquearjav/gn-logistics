import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';
import { TrustStrip } from '@/components/sections/trust-strip';
import { WhatWeDo } from '@/components/sections/what-we-do';
import { ServicesPreview } from '@/components/sections/services-preview';
import { WhyUs } from '@/components/sections/why-us';
import { Process } from '@/components/sections/process';
import { CtaBand } from '@/components/sections/cta-band';
import { ContactSection } from '@/components/sections/contact-section';

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <TrustStrip />
      <WhatWeDo />
      <ServicesPreview />
      <WhyUs />
      <Process />
      <CtaBand />
      <ContactSection />
    </>
  );
}
