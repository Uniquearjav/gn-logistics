import { useTranslations } from 'next-intl';
import { Container } from '@/components/shared/container';
import { LuGlobe, LuClock, LuShieldCheck, LuFileCheck } from 'react-icons/lu';

export function TrustStrip() {
  const t = useTranslations('trust');

  const items = [
    {
      metric: t('item1.metric'),
      label: t('item1.label'),
      icon: LuGlobe,
    },
    {
      metric: t('item2.metric'),
      label: t('item2.label'),
      icon: LuClock,
    },
    {
      metric: t('item3.metric'),
      label: t('item3.label'),
      icon: LuShieldCheck,
    },
    {
      metric: t('item4.metric'),
      label: t('item4.label'),
      icon: LuFileCheck,
    },
  ];

  return (
    <div className="w-full border-b border-border bg-surface py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 px-4 py-4 sm:first:pl-0 sm:last:pr-0 md:px-8"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white border border-border/80 text-primary">
                  <Icon className="h-5 w-5 stroke-[1.25]" />
                </div>
                <div className="space-y-1">
                  <span className="font-heading text-lg font-medium text-foreground tracking-tight block">
                    {item.metric}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground leading-snug block">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
