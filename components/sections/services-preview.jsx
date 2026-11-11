import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section } from '@/components/shared/section';
import { Container } from '@/components/shared/container';
import { Eyebrow } from '@/components/shared/eyebrow';
import { Reveal } from '@/components/shared/reveal';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LuWrench, LuSearch, LuTruck, LuArrowRight } from 'react-icons/lu';

const previewIcons = [LuWrench, LuSearch, LuTruck];

export function ServicesPreview() {
  const t = useTranslations('servicesPreview');

  const items = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      link: t('items.0.link'),
      icon: previewIcons[0],
      href: '/services#spare-parts',
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      link: t('items.1.link'),
      icon: previewIcons[1],
      href: '/services#rapid-sourcing',
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      link: t('items.2.link'),
      icon: previewIcons[2],
      href: '/services#port-delivery',
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

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 100}>
                <Card className="h-full bg-white border border-border/80 hover:border-primary/40 transition-colors duration-300 flex flex-col justify-between">
                  <CardHeader className="p-8 pb-4">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-surface border border-border text-primary">
                      <Icon className="h-6 w-6 stroke-[1.25]" />
                    </div>
                    <CardTitle className="text-xl font-medium tracking-tight">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="pt-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-6">
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-primary hover:text-accent transition-colors"
                    >
                      <span>{item.link}</span>
                      <LuArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 duration-200" />
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
