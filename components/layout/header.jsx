'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './language-switcher';
import { MobileNav } from './mobile-nav';

export function Header() {
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: tNav('home') },
    { href: '/about', label: tNav('about') },
    { href: '/services', label: tNav('services') },
    { href: '/#contact', label: tNav('contact') },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-all duration-200 ${
        scrolled ? 'border-b border-border shadow-2xs' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Official Brand Logo */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          aria-label="German Naval Logistics UG (haftungsbeschränkt) - Home"
        >
          <Image
            src="/images/logo-clean.png"
            alt="German Naval Logistics UG (haftungsbeschränkt)"
            width={240}
            height={60}
            className="h-11 md:h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href.replace('/#', '#'));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 hover:text-primary ${
                  isActive ? 'text-primary font-semibold' : 'text-foreground/75'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <LanguageSwitcher />
          <Button asChild size="default" className="text-xs uppercase tracking-wider font-semibold">
            <Link href="/#contact">{tCommon('requestQuote')}</Link>
          </Button>
        </div>

        {/* Mobile Nav Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
