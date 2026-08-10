"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeContent, navLinks } from "@/content/home";
import { cn } from "@/lib/cn";

export const HEADER_HEIGHT = 72;

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 34 34" fill="none" aria-hidden className="shrink-0">
      <circle cx="17" cy="17" r="16" stroke="currentColor" strokeWidth="1.2" className="text-accent" />
      <path
        d="M17 7c3.2 2.4 5.2 5.4 5.2 9.1 0 4.2-2.3 7.4-5.2 9.9-2.9-2.5-5.2-5.7-5.2-9.9C11.8 12.4 13.8 9.4 17 7Z"
        fill="currentColor"
        className="text-accent"
        opacity="0.9"
      />
      <path
        d="M17 10.2c2.1 1.7 3.4 3.8 3.4 6.2 0 3-1.5 5.3-3.4 7.1-1.9-1.8-3.4-4.1-3.4-7.1 0-2.4 1.3-4.5 3.4-6.2Z"
        fill="currentColor"
        className="text-heading"
        opacity="0.75"
      />
    </svg>
  );
}

export function SiteHeader() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
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
        "fixed inset-x-0 top-0 z-[9999] border-b bg-background transition",
        scrolled
          ? "border-border shadow-[0_8px_24px_rgba(43,33,24,0.06)]"
          : "border-transparent",
      )}
    >
      <Container
        className="flex items-center gap-3"
        style={{ height: HEADER_HEIGHT }}
      >
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 text-heading">
          <LogoMark />
          <span className="leading-tight">
            <span className="block truncate font-serif-cn text-base sm:text-lg md:text-xl">
              {t(homeContent.brand)}
            </span>
            <span className="hidden text-[10px] tracking-[0.22em] text-muted sm:block">
              {homeContent.brandEn}
            </span>
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-5 xl:gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-heading/80 transition hover:text-cta"
            >
              {t(link.label)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 text-sm">
            <button
              type="button"
              onClick={() => setLocale("zh")}
              className={cn(
                "transition",
                locale === "zh" ? "font-semibold text-heading" : "text-muted hover:text-heading",
              )}
            >
              中文
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(
                "transition",
                locale === "en" ? "font-semibold text-heading" : "text-muted hover:text-heading",
              )}
            >
              EN
            </button>
          </div>
          <ThemeToggle />
          <Button href="#entries" className="h-10 px-5 text-xs">
            {t(homeContent.hero.start)}
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface"
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
        <div className="max-h-[calc(100svh-72px)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-3 text-base text-heading hover:bg-accent-soft"
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
            <div className="px-2 pt-2">
              <Button href="#entries" className="w-full" onClick={() => setOpen(false)}>
                {t(homeContent.hero.start)}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
