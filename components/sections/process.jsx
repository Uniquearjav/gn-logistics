import { useTranslations } from 'next-intl';
import { Section } from '@/components/shared/section';
import { Container } from '@/components/shared/container';
import { Eyebrow } from '@/components/shared/eyebrow';
import { Reveal } from '@/components/shared/reveal';

export function Process() {
  const t = useTranslations('process');

  const steps = [
    {
      number: t('steps.0.number'),
      title: t('steps.0.title'),
      description: t('steps.0.description'),
    },
    {
      number: t('steps.1.number'),
      title: t('steps.1.title'),
      description: t('steps.1.description'),
    },
    {
      number: t('steps.2.number'),
      title: t('steps.2.title'),
      description: t('steps.2.description'),
    },
    {
      number: t('steps.3.number'),
      title: t('steps.3.title'),
      description: t('steps.3.description'),
    },
  ];

  return (
    <Section surface>
      <Container>
        <div className="max-w-2xl mb-16 md:mb-20">
          <Reveal>
            <Eyebrow>{t('eyebrow')}</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight">
              {t('heading')}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              {t('description')}
            </p>
          </Reveal>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Subtle connecting line across desktop */}
          <div
            className="hidden md:block absolute top-[18px] left-[10%] right-[10%] h-[1px] bg-border z-0"
            aria-hidden="true"
          />

          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="relative z-10 flex flex-col items-start space-y-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-border text-xs font-mono font-semibold text-primary shadow-2xs">
                  {step.number}
                </div>
                <h3 className="font-heading text-lg font-medium text-foreground tracking-tight pt-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
