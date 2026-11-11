import { useTranslations } from 'next-intl';
import { Section } from '@/components/shared/section';
import { Container } from '@/components/shared/container';
import { Eyebrow } from '@/components/shared/eyebrow';
import { Reveal } from '@/components/shared/reveal';
import { Badge } from '@/components/ui/badge';
import { ContactForm } from './contact-form';
import { LuPhone, LuMapPin, LuClock, LuTriangleAlert } from 'react-icons/lu';
import { SITE_CONFIG } from '@/lib/site';

export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <Section id="contact" className="scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 columns): Contact Details & Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
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

            <Reveal delay={150}>
              <div className="space-y-6 pt-4 border-t border-border">
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-surface border border-border text-primary">
                    <LuMapPin className="h-5 w-5 stroke-[1.25]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t('addressTitle')}
                    </h4>
                    <p className="text-sm font-medium text-foreground mt-1 leading-snug">
                      {SITE_CONFIG.legalName}
                      <br />
                      {SITE_CONFIG.contact.address.street}
                      <br />
                      {SITE_CONFIG.contact.address.postalCode}{' '}
                      {SITE_CONFIG.contact.address.city},{' '}
                      {SITE_CONFIG.contact.address.country}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-surface border border-border text-primary">
                    <LuClock className="h-5 w-5 stroke-[1.25]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t('hoursTitle')}
                    </h4>
                    <p className="text-sm font-medium text-foreground mt-1">
                      {SITE_CONFIG.contact.hours}
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-surface border border-border text-primary">
                    <LuPhone className="h-5 w-5 stroke-[1.25]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t('phoneTitle')}
                    </h4>
                    <p className="text-sm font-medium text-foreground mt-1">
                      {SITE_CONFIG.contact.phone}
                    </p>
                  </div>
                </div>

                {/* Emergency Phone */}
                <div className="flex items-start gap-4 p-4 rounded-md border border-accent/30 bg-accent/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white border border-accent/40 text-accent">
                    <LuTriangleAlert className="h-5 w-5 stroke-[1.25]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        {t('emergencyTitle')}
                      </h4>
                      <Badge variant="accent" className="text-[10px] px-1.5 py-0">
                        {t('emergencyBadge')}
                      </Badge>
                    </div>
                    <p className="text-sm font-bold text-foreground">
                      {SITE_CONFIG.contact.emergencyPhone}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (7 columns): Contact Form */}
          <div className="lg:col-span-7 bg-surface/60 p-8 sm:p-10 rounded-lg border border-border">
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
