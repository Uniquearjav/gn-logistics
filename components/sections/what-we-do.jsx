import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section } from '@/components/shared/section';
import { Container } from '@/components/shared/container';
import { Eyebrow } from '@/components/shared/eyebrow';
import { Reveal } from '@/components/shared/reveal';
import { LuArrowRight } from 'react-icons/lu';

export function WhatWeDo() {
  const t = useTranslations('whatWeDo');

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (7 columns): Big Statement */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{t('eyebrow')}</Eyebrow>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground leading-[1.15] max-w-xl">
                {t('heading')}
              </h2>
            </Reveal>
          </div>

          {/* Right Column (5 columns): Supporting narrative & link */}
          <div className="lg:col-span-5 space-y-6 lg:pt-8">
            <Reveal delay={100}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('description')}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary hover:text-accent transition-colors pt-2"
              >
                <span>{t('cta')}</span>
                <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-200" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
