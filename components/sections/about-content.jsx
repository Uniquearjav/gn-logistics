import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/shared/section';
import { Container } from '@/components/shared/container';
import { Eyebrow } from '@/components/shared/eyebrow';
import { Reveal } from '@/components/shared/reveal';
import { LuMapPin, LuAnchor, LuCompass, LuShieldCheck } from 'react-icons/lu';

export function AboutContent() {
  const t = useTranslations('about');

  const valueIcons = [LuCompass, LuAnchor, LuShieldCheck];

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <section className="py-20 md:py-28 lg:py-36 bg-surface border-b border-border">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Reveal>
              <Eyebrow>{t('eyebrow')}</Eyebrow>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.1] text-balance">
                {t('heading')}
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-normal">
                {t('intro')}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Company Story (Two Columns, Text + Image Placeholder) */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 max-w-2xl">
              <Reveal>
                <h2 className="font-heading text-3xl sm:text-4xl font-light tracking-tight text-foreground">
                  {t('story.heading')}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>{t('story.paragraph1')}</p>
                  <p>{t('story.paragraph2')}</p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-sm group">
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src="/images/stock/marine-engine-assembly.webp"
                      alt="Marine spare parts engineering and precision assembly"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="px-5 py-3.5 bg-white border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-mono text-[11px] tracking-wider uppercase text-foreground/80 font-medium">
                      Technical Engineering
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                      Quality Standards
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Values with Hairline Separators */}
      <Section surface>
        <Container>
          <div className="max-w-2xl mb-16 md:mb-20">
            <Reveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-light tracking-tight text-foreground">
                {t('values.heading')}
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[0, 1, 2].map((idx) => {
              const Icon = valueIcons[idx];
              return (
                <Reveal key={idx} delay={idx * 120}>
                  <div className="space-y-6 pt-6 border-t border-border">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white border border-border text-accent">
                      <Icon className="h-5 w-5 stroke-[1.25]" />
                    </div>
                    <h3 className="font-heading text-xl font-medium tracking-tight text-foreground">
                      {t(`values.items.${idx}.title`)}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t(`values.items.${idx}.description`)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 4. Our Approach */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <Reveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-light tracking-tight text-foreground">
                {t('approach.heading')}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('approach.description')}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 5. Team / Location */}
      <Section surface>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <h2 className="font-heading text-3xl sm:text-4xl font-light tracking-tight text-foreground">
                  {t('location.heading')}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t('location.description')}
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div className="flex items-start gap-4 p-6 rounded-md bg-white border border-border mt-6">
                  <LuMapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                      {t('location.hubTitle')}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('location.address')}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={150}>
                <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-sm group">
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src="/images/stock/logistics-hub-terminal.webp"
                      alt={t('location.mapAlt')}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="px-5 py-3.5 bg-white border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-mono text-[11px] tracking-wider uppercase text-foreground/80 font-medium">
                      European Maritime Network
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                      Direct Dispatch
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
