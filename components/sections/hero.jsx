import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/container';
import { Eyebrow } from '@/components/shared/eyebrow';
import { Reveal } from '@/components/shared/reveal';
import { LuArrowRight } from 'react-icons/lu';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center py-20 md:py-28 lg:py-36 bg-background overflow-hidden border-b border-border/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Block (6 columns) */}
          <div className="lg:col-span-6 space-y-8 max-w-2xl">
            <Reveal>
              <Eyebrow>{t('eyebrow')}</Eyebrow>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.08] text-balance">
                {t('title')}
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-normal max-w-xl">
                {t('description')}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button asChild size="lg" className="text-xs uppercase tracking-wider font-semibold">
                  <Link href="/#contact" className="gap-2">
                    {t('primaryCta')}
                    <LuArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-xs uppercase tracking-wider font-semibold"
                >
                  <Link href="/services">{t('secondaryCta')}</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Visual Image (6 columns, larger presence, rounded-2xl) */}
          <div className="lg:col-span-6">
            <Reveal delay={150}>
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-md group">
                <div className="relative aspect-4/3 sm:aspect-16/11 lg:aspect-[4/3] w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[520px]">
                  <Image
                    src="/images/stock/hero-container-ship.webp"
                    alt={t('imageAlt')}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white">
                    <span className="font-mono text-[11px] tracking-wider uppercase bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                      Commercial Fleet In Transit
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-white/95 font-semibold bg-primary/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                      Global Port Logistics
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
