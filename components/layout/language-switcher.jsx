'use client';

import * as React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LuGlobe, LuCheck } from 'react-icons/lu';

export function LanguageSwitcher() {
  const t = useTranslations('common');
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleSelectLocale = (nextLocale) => {
    if (nextLocale === currentLocale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-xs font-semibold tracking-wider uppercase text-foreground/80 hover:bg-surface hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
        aria-label={t('language')}
      >
        <LuGlobe className="h-3.5 w-3.5 text-accent" />
        <span>{currentLocale.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36 bg-white">
        <DropdownMenuItem
          onClick={() => handleSelectLocale('de')}
          className="flex items-center justify-between text-xs font-medium cursor-pointer py-2"
        >
          <span>Deutsch (DE)</span>
          {currentLocale === 'de' && <LuCheck className="h-3.5 w-3.5 text-accent" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleSelectLocale('en')}
          className="flex items-center justify-between text-xs font-medium cursor-pointer py-2"
        >
          <span>English (EN)</span>
          {currentLocale === 'en' && <LuCheck className="h-3.5 w-3.5 text-accent" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
