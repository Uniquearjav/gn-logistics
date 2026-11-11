import { useTranslations } from 'next-intl';
import { Section } from '@/components/shared/section';
import { Container } from '@/components/shared/container';
import { Eyebrow } from '@/components/shared/eyebrow';
import { Reveal } from '@/components/shared/reveal';

export function WhyUs() {
  const t = useTranslations('whyUs');

  const points = [
    {
      number: t('points.0.number'),
      title: t('points.0.title'),
      description: t('points.0.description'),
    },
    {
      number: t('points.1.number'),
      title: t('points.1.title'),
      description: t('points.1.description'),
    },
    {
      number: t('points.2.number'),
      title: t('points.2.title'),
      description: t('points.2.description'),
    },
  ];

  return (
    <Section>
      <Container>
        <div className="max-w-2xl mb-16 md:mb-24">
          <Reveal>
            <Eyebrow>{t('eyebrow')}</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight">
              {t('heading')}
            </h2>
          </Reveal>
        </div>

        {/* 3 Numbered Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {points.map((pt, idx) => (
            <Reveal key={idx} delay={idx * 120}>
              <div className="space-y-6 pt-6 border-t border-border">
                <span className="font-heading text-4xl sm:text-5xl font-extralight tracking-tight text-accent block">
                  {pt.number}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                  {pt.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {pt.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
