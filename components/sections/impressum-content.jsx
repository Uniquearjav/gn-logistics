import { useTranslations } from 'next-intl';
import { Container } from '@/components/shared/container';
import { Eyebrow } from '@/components/shared/eyebrow';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { LuTriangleAlert } from 'react-icons/lu';

/**
 * Impressum Content Component
 * Compliant with § 5 DDG and § 18 Abs. 2 MStV.
 *
 * IMPORTANT LEGAL NOTICE FOR DEPLOYMENT:
 * All bracketed values [LIKE THIS] are placeholders.
 * Before deploying this website for production use, all placeholders MUST be
 * replaced with authentic corporate registration data, and the final text MUST be
 * reviewed by a qualified German attorney (Fachanwalt für IT-Recht / Handelsrecht).
 */
export function ImpressumContent() {
  const t = useTranslations('impressum');

  return (
    <div className="py-20 md:py-28 lg:py-36 bg-background">
      <Container>
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Page Heading */}
          <div className="space-y-4">
            <Eyebrow>{t('eyebrow')}</Eyebrow>
            <h1 className="font-heading text-4xl sm:text-5xl font-light tracking-tight text-foreground">
              {t('heading')}
            </h1>
          </div>

          {/* Prominent Legal Disclaimer Banner */}
          <Alert variant="default" className="border-accent/40 bg-accent/5 p-6">
            <LuTriangleAlert className="h-5 w-5 text-accent mt-0.5" />
            <div className="ml-3 space-y-1">
              <AlertTitle className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Rechtlicher Hinweis / Legal Notice
              </AlertTitle>
              <AlertDescription className="text-xs text-muted-foreground leading-relaxed">
                {t('notice')}
              </AlertDescription>
            </div>
          </Alert>

          {/* Section 1: § 5 DDG */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-medium text-foreground tracking-tight">
              {t('sec1.title')}
            </h2>
            <div className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line font-mono bg-surface p-4 rounded-md border border-border">
              <p className="font-semibold text-foreground">{t('sec1.company')}</p>
              <p>{t('sec1.address')}</p>
              <p className="mt-3">{t('sec1.representedBy')}</p>
            </div>
          </section>

          <Separator />

          {/* Section 2: Contact */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-medium text-foreground tracking-tight">
              {t('sec2.title')}
            </h2>
            <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-1 font-mono bg-surface p-4 rounded-md border border-border">
              <p>{t('sec2.phone')}</p>
              <p>{t('sec2.email')}</p>
              <p>{t('sec2.web')}</p>
            </div>
          </section>

          <Separator />

          {/* Section 3: Commercial Register */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-medium text-foreground tracking-tight">
              {t('sec3.title')}
            </h2>
            <div className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line font-mono bg-surface p-4 rounded-md border border-border">
              {t('sec3.text')}
            </div>
          </section>

          <Separator />

          {/* Section 4: VAT Identification */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-medium text-foreground tracking-tight">
              {t('sec4.title')}
            </h2>
            <div className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line font-mono bg-surface p-4 rounded-md border border-border">
              {t('sec4.text')}
            </div>
          </section>

          <Separator />

          {/* Section 5: Editorial Responsibility § 18 Abs. 2 MStV */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-medium text-foreground tracking-tight">
              {t('sec5.title')}
            </h2>
            <div className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line font-mono bg-surface p-4 rounded-md border border-border">
              {t('sec5.text')}
            </div>
          </section>

          <Separator />

          {/* Section 6: EU Dispute Resolution */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-medium text-foreground tracking-tight">
              {t('sec6.title')}
            </h2>
            <div className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
              {t('sec6.text')}
            </div>
          </section>

          <Separator />

          {/* Section 7: Liability for Content */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-medium text-foreground tracking-tight">
              {t('sec7.title')}
            </h2>
            <div className="text-sm text-muted-foreground leading-relaxed">
              {t('sec7.text')}
            </div>
          </section>

          <Separator />

          {/* Section 8: Liability for Links */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-medium text-foreground tracking-tight">
              {t('sec8.title')}
            </h2>
            <div className="text-sm text-muted-foreground leading-relaxed">
              {t('sec8.text')}
            </div>
          </section>

          <Separator />

          {/* Section 9: Copyright */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-medium text-foreground tracking-tight">
              {t('sec9.title')}
            </h2>
            <div className="text-sm text-muted-foreground leading-relaxed">
              {t('sec9.text')}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
