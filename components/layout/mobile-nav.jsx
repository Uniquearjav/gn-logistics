'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './language-switcher';
import { LuMenu } from 'react-icons/lu';
import { SITE_CONFIG } from '@/lib/site';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: tNav('home') },
    { href: '/about', label: tNav('about') },
    { href: '/services', label: tNav('services') },
    { href: '/#contact', label: tNav('contact') },
    { href: '/impressum', label: tNav('impressum') },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden h-10 w-10 text-foreground"
          aria-label={tNav('openMenu')}
        >
          <LuMenu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col justify-between p-8 sm:p-10 w-full sm:max-w-md bg-white">
        <div className="space-y-8">
          <SheetHeader className="text-left pb-4 border-b border-border">
            <SheetTitle className="flex items-center">
              <Image
                src="/images/logo-clean.png"
                alt="German Naval Logistics UG (haftungsbeschränkt)"
                width={190}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col space-y-4 pt-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-xl font-heading tracking-tight transition-colors py-2 ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-y-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              {tCommon('language')}
            </span>
            <LanguageSwitcher />
          </div>

          <Button
            asChild
            className="w-full h-12 text-sm tracking-wide uppercase font-semibold"
            onClick={() => setOpen(false)}
          >
            <Link href="/#contact">{tCommon('requestQuote')}</Link>
          </Button>

          <p className="text-xs text-muted-foreground leading-relaxed">
            {SITE_CONFIG.contact.phone} • {SITE_CONFIG.contact.email}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
