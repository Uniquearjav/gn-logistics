import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';
import { LuArrowRight, LuMail } from 'react-icons/lu';
import { SITE_CONFIG } from '@/lib/site';

export function CtaBand() {
  const t = useTranslations('ctaBand');

  return (
    <section className="py-24 md:py-36 bg-surface border-y border-border">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight text-balance">
              {t('heading')}
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              {t('description')}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button asChild size="lg" className="text-xs uppercase tracking-wider font-semibold">
                <Link href="/#contact" className="gap-2">
                  <span>{t('button')}</span>
                  <LuArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <span>{t('emailLabel')}</span>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="font-medium text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline"
              >
                <LuMail className="h-4 w-4" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
