import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Separator } from '@/components/ui/separator';
import { LuPhone, LuMail, LuMapPin, LuClock } from 'react-icons/lu';
import { SITE_CONFIG } from '@/lib/site';

export function Footer() {
  const tCommon = useTranslations('common');
  const tNav = useTranslations('nav');
  const tFooter = useTranslations('footer');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        {/* 4-column grid with generous gutters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              aria-label="German Naval Logistics UG (haftungsbeschränkt) - Home"
            >
              <Image
                src="/images/logo-clean.png"
                alt="German Naval Logistics UG (haftungsbeschränkt)"
                width={220}
                height={55}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {tFooter('brandDescription')}
            </p>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground/70 leading-normal">
                {tFooter('privacyHint')}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
              {tFooter('colNav')}
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
              {tFooter('colLegal')}
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tNav('impressum')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
              {tFooter('colContact')}
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <LuMapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.legalName}
                  <br />
                  {SITE_CONFIG.contact.address.street}
                  <br />
                  {SITE_CONFIG.contact.address.postalCode}{' '}
                  {SITE_CONFIG.contact.address.city},{' '}
                  {SITE_CONFIG.contact.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LuPhone className="h-4 w-4 text-accent shrink-0" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <LuMail className="h-4 w-4 text-accent shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-xs pt-1 text-muted-foreground/80">
                <LuClock className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 md:my-16" />

        {/* Bottom Copyright & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/80">
          <p>
            © {currentYear} {SITE_CONFIG.name}. {tCommon('rightsReserved')}
          </p>
          <p className="flex items-center gap-1.5 text-foreground/85">
            <span>{tFooter('wantWebsite')}</span>
            <a
              href="https://www.bahar.world"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:text-accent transition-colors underline-offset-4 hover:underline"
            >
              {tFooter('poweredBy')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
