import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/container';
import { Eyebrow } from '@/components/shared/eyebrow';
import { LuAnchor, LuArrowLeft } from 'react-icons/lu';

export default function NotFound() {
  const t = useTranslations('common.notFound');

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 bg-background">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-surface border border-border text-primary">
            <LuAnchor className="h-8 w-8 stroke-[1.25]" />
          </div>

          <Eyebrow>404 Error</Eyebrow>

          <h1 className="font-heading text-3xl sm:text-4xl font-light tracking-tight text-foreground">
            {t('title')}
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed">
            {t('description')}
          </p>

          <div className="pt-4">
            <Button asChild size="default" className="text-xs uppercase tracking-wider font-semibold">
              <Link href="/" className="gap-2">
                <LuArrowLeft className="h-4 w-4" />
                <span>{t('backHome')}</span>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
