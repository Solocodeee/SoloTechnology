"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { LocaleLink } from "@/components/ui/locale-link";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";

interface NavbarProps {
  locale: Locale;
  /** Links whose hrefs already include the language prefix. */
  links: { label: string; href: string }[];
  cta: { label: string; href: string };
  labels: { open: string; close: string; main: string; home: string; switchLabel: string; switchAria: string };
}

export function Navbar({ locale, links, cta, labels }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const homeHref = `/${locale}`;
  const isActive = (href: string) => (href === homeHref ? pathname === homeHref : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur">
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <LocaleLink href={homeHref} onClick={() => setOpen(false)} aria-label={labels.home}>
          <Logo />
        </LocaleLink>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label={labels.main}>
          {links.map((link) => (
            <LocaleLink
              key={link.href}
              href={link.href}
              className={cn("relative py-1 text-sm font-medium text-ink-200 transition-colors hover:text-white", isActive(link.href) && "text-white")}
            >
              {link.label}
              {isActive(link.href) && <span className="absolute -bottom-1 start-0 h-0.5 w-full rounded-full bg-brand-blue-500" />}
            </LocaleLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher locale={locale} label={labels.switchLabel} ariaLabel={labels.switchAria} />
          <Button href={cta.href}>{cta.label}</Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher locale={locale} label={labels.switchLabel} ariaLabel={labels.switchAria} />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-white"
            aria-label={open ? labels.close : labels.open}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="enter-fade [--delay:0ms] border-t border-white/10 bg-navy-950 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <LocaleLink
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn("rounded-lg px-3 py-2.5 text-sm font-medium text-ink-200 hover:bg-white/5 hover:text-white", isActive(link.href) && "bg-white/5 text-white")}
              >
                {link.label}
              </LocaleLink>
            ))}
            <Button href={cta.href} className="mt-3 w-full">{cta.label}</Button>
          </Container>
        </div>
      )}
    </header>
  );
}
