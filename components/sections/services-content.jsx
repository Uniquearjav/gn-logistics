import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/shared/section';
import { Container } from '@/components/shared/container';
import { Eyebrow } from '@/components/shared/eyebrow';
import { Reveal } from '@/components/shared/reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { LuCheck, LuArrowRight } from 'react-icons/lu';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

export function ServicesContent() {
  const t = useTranslations('services');
  const tCommon = useTranslations('common');

  const services = [
    {
      id: 'spare-parts',
      idx: 0,
      imageSrc: '/images/stock/marine-engine-assembly.webp',
      imageTag: 'Machinery Components',
      imageLabel: 'Main Engine & Auxiliary Systems',
    },
    {
      id: 'rapid-sourcing',
      idx: 1,
      imageSrc: '/images/stock/spare-parts-gears.webp',
      imageTag: 'Precision Sourcing',
      imageLabel: 'OEM Precision Machined Parts',
    },
    {
      id: 'port-delivery',
      idx: 2,
      imageSrc: '/images/stock/port-logistics-terminal.webp',
      imageTag: 'Gangway Logistics',
      imageLabel: 'Direct Port Terminal Dispatch',
    },
    {
      id: 'quality-assurance',
      idx: 3,
      imageSrc: '/images/stock/quality-inspection-caliper.webp',
      imageTag: 'Class Certification',
      imageLabel: 'DNV / Lloyd’s Register Standards',
    },
    {
      id: 'fleet-agreements',
      idx: 4,
      imageSrc: '/images/stock/fleet-warehouse-inventory.webp',
      imageTag: 'Fleet Inventory',
      imageLabel: 'Dedicated Safety Stock Reservation',
    },
    {
      id: 'emergency-support',
      idx: 5,
      imageSrc: '/images/stock/vessel-emergency-dispatch.webp',
      imageTag: '24/7 Rapid Response',
      imageLabel: 'Vessel Immobilisation (AOG) Dispatch',
    },
  ];

  return (
    <div className="w-full">
      {/* 1. Services Header */}
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

      {/* 2. 6 Service Blocks (Alternating Layout) */}
      <div className="divide-y divide-border">
        {services.map((svc, index) => {
          const isEven = index % 2 === 1;
          const bullets = t.raw(`items.${svc.idx}.bullets`);

          return (
            <Section
              key={svc.id}
              id={svc.id}
              surface={isEven}
              className="scroll-mt-20 py-20 md:py-32"
            >
              <Container>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Text Content (7 cols) */}
                  <div
                    className={`lg:col-span-7 space-y-6 max-w-2xl ${
                      isEven ? 'lg:col-start-6' : ''
                    }`}
                  >
                    <Reveal>
                      <span className="text-xs font-mono font-medium tracking-widest text-accent uppercase block">
                        0{index + 1} / Service
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-foreground mt-2">
                        {t(`items.${svc.idx}.title`)}
                      </h2>
                    </Reveal>

                    <Reveal delay={100}>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {t(`items.${svc.idx}.description`)}
                      </p>
                    </Reveal>

                    <Reveal delay={150}>
                      <ul className="space-y-3 pt-2">
                        {Array.isArray(bullets) &&
                          bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-3 text-sm md:text-base text-foreground/85"
                            >
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent mt-0.5">
                                <LuCheck className="h-3.5 w-3.5 stroke-[2]" />
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                      </ul>
                    </Reveal>

                    <Reveal delay={200}>
                      <div className="pt-4">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="text-xs uppercase tracking-wider font-semibold"
                        >
                          <Link href="/#contact" className="gap-2">
                            <span>{tCommon('requestQuote')}</span>
                            <LuArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      </div>
                    </Reveal>
                  </div>

                  {/* Stock Photography Block (5 cols) */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:col-start-1' : ''
                    }`}
                  >
                    <Reveal delay={120}>
                      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-sm group">
                        <div className="relative aspect-4/3 w-full">
                          <Image
                            src={svc.imageSrc}
                            alt={t(`items.${svc.idx}.title`)}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                        <div className="px-5 py-3.5 bg-white border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                          <span className="font-mono text-[11px] tracking-wider uppercase text-foreground/80 font-medium">
                            {svc.imageLabel}
                          </span>
                          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                            {svc.imageTag}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </Container>
            </Section>
          );
        })}
      </div>

      {/* 3. FAQ Section with shadcn Accordion */}
      <Section surface>
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Reveal>
                <Eyebrow>{t('faq.eyebrow')}</Eyebrow>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
                  {t('faq.heading')}
                </h2>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <Accordion type="single" collapsible className="w-full bg-white p-6 md:p-8 rounded-lg border border-border">
                {[0, 1, 2, 3, 4].map((fIdx) => (
                  <AccordionItem key={fIdx} value={`faq-${fIdx}`}>
                    <AccordionTrigger>
                      {t(`faq.items.${fIdx}.question`)}
                    </AccordionTrigger>
                    <AccordionContent>
                      {t(`faq.items.${fIdx}.answer`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </Container>
      </Section>
    </div>
  );
}
