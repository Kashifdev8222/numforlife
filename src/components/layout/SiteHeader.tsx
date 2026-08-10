"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { homeContent, navLinks } from "@/content/home";
import { cn } from "@/lib/cn";

export const HEADER_HEIGHT = 72;

function LogoMark() {
  return (
    <svg width="30" height="30" viewBox="0 0 34 34" fill="none" aria-hidden className="shrink-0 text-accent">
      <circle cx="17" cy="17" r="16" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M17 7c3.2 2.4 5.2 5.4 5.2 9.1 0 4.2-2.3 7.4-5.2 9.9-2.9-2.5-5.2-5.7-5.2-9.9C11.8 12.4 13.8 9.4 17 7Z"
        fill="currentColor"
        opacity="0.95"
      />
    </svg>
  );
}

export function SiteHeader() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[9999] border-b transition-all duration-300",
        scrolled || open
          ? "border-border bg-[var(--nav-bg)] text-heading backdrop-blur-md"
          : "border-transparent bg-transparent text-heading",
      )}
    >
      <Container className="flex items-center gap-3" style={{ height: HEADER_HEIGHT }}>
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2">
          <LogoMark />
          <span className="leading-tight">
            <span className="block truncate font-serif-cn text-base sm:text-lg">
              {t(homeContent.brand)}
            </span>
            <span className="hidden text-[10px] tracking-[0.22em] text-muted sm:block">
              {homeContent.brandEn}
            </span>
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 transition hover:text-accent"
            >
              {t(link.label)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 text-sm">
            <button
              type="button"
              onClick={() => setLocale("zh")}
              className={cn(locale === "zh" ? "font-semibold text-heading" : "text-muted hover:text-heading")}
            >
              中文
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(locale === "en" ? "font-semibold text-heading" : "text-muted hover:text-heading")}
            >
              EN
            </button>
          </div>
          <a
            href="#journey"
            className="inline-flex h-10 items-center justify-center rounded-sm bg-cta px-5 text-xs font-medium text-cta-foreground transition hover:brightness-110"
          >
            {t(homeContent.hero.start)}
          </a>
        </div>

        <div className="ml-auto lg:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border/60 bg-surface/40"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className={cn("block h-0.5 w-4 bg-heading transition", open && "translate-y-[4px] rotate-45")} />
              <span className={cn("block h-0.5 w-4 bg-heading transition", open && "hidden")} />
              <span className={cn("block h-0.5 w-4 bg-heading transition", open && "-translate-y-[4px] -rotate-45")} />
            </div>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 py-3 text-base text-heading"
                onClick={() => setOpen(false)}
              >
                {t(link.label)}
              </Link>
            ))}
            <div className="mt-2 flex gap-4 px-2 py-2 text-sm">
              <button type="button" onClick={() => setLocale("zh")} className={locale === "zh" ? "font-semibold" : "text-muted"}>
                中文
              </button>
              <button type="button" onClick={() => setLocale("en")} className={locale === "en" ? "font-semibold" : "text-muted"}>
                EN
              </button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
