"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Container } from "@/components/ui/Container";
import { homeContent, navLinks } from "@/content/home";
import { cn } from "@/lib/cn";

export const HEADER_HEIGHT = 72;

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <circle cx="17" cy="17" r="16" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M17 7c3.2 2.4 5.2 5.4 5.2 9.1 0 4.2-2.3 7.4-5.2 9.9-2.9-2.5-5.2-5.7-5.2-9.9C11.8 12.4 13.8 9.4 17 7Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M17 10.2c2.1 1.7 3.4 3.8 3.4 6.2 0 3-1.5 5.3-3.4 7.1-1.9-1.8-3.4-4.1-3.4-7.1 0-2.4 1.3-4.5 3.4-6.2Z"
        fill="currentColor"
        className="text-heading dark:text-[#f7efe4]"
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
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  const overHero = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[9999] border-b transition-colors duration-300",
        overHero
          ? "border-transparent bg-transparent text-[#f6efe6]"
          : "border-border bg-[var(--nav-bg)] text-heading backdrop-blur-md",
      )}
    >
      <Container className="flex items-center gap-3" style={{ height: HEADER_HEIGHT }}>
        <Link
          href="/"
          className={cn(
            "flex min-w-0 shrink-0 items-center gap-2",
            overHero ? "text-[#f6efe6]" : "text-heading",
          )}
        >
          <LogoMark className={overHero ? "text-gold" : "text-accent"} />
          <span className="leading-tight">
            <span className="block truncate font-serif-cn text-base sm:text-lg md:text-xl">
              {t(homeContent.brand)}
            </span>
            <span
              className={cn(
                "hidden text-[10px] tracking-[0.22em] sm:block",
                overHero ? "text-[#d9cbb8]" : "text-muted",
              )}
            >
              {homeContent.brandEn}
            </span>
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap text-sm font-medium transition",
                overHero
                  ? "text-[#f0e6d8]/85 hover:text-gold"
                  : "text-heading/80 hover:text-cta",
              )}
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
                locale === "zh"
                  ? overHero
                    ? "font-semibold text-[#f6efe6]"
                    : "font-semibold text-heading"
                  : overHero
                    ? "text-[#cbb89f] hover:text-[#f6efe6]"
                    : "text-muted hover:text-heading",
              )}
            >
              中文
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(
                "transition",
                locale === "en"
                  ? overHero
                    ? "font-semibold text-[#f6efe6]"
                    : "font-semibold text-heading"
                  : overHero
                    ? "text-[#cbb89f] hover:text-[#f6efe6]"
                    : "text-muted hover:text-heading",
              )}
            >
              EN
            </button>
          </div>
          <ThemeToggle
            className={
              overHero
                ? "border-white/25 bg-white/10 text-[#f6efe6] hover:bg-white/15"
                : undefined
            }
          />
          <a
            href="#experience"
            className="inline-flex h-10 items-center justify-center rounded-md bg-cta px-5 text-xs font-medium text-cta-foreground transition hover:brightness-110"
          >
            {t(homeContent.hero.start)}
          </a>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ThemeToggle
            className={
              overHero
                ? "border-white/25 bg-white/10 text-[#f6efe6] hover:bg-white/15"
                : undefined
            }
          />
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md border",
              overHero
                ? "border-white/25 bg-white/10"
                : "border-border bg-surface",
            )}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-0.5 w-4 transition",
                  overHero ? "bg-[#f6efe6]" : "bg-heading",
                  open && "translate-y-[4px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-4 transition",
                  overHero ? "bg-[#f6efe6]" : "bg-heading",
                  open && "hidden",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-4 transition",
                  overHero ? "bg-[#f6efe6]" : "bg-heading",
                  open && "-translate-y-[4px] -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="max-h-[calc(100svh-72px)] overflow-y-auto border-t border-border bg-background text-heading lg:hidden">
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
              <button
                type="button"
                onClick={() => setLocale("zh")}
                className={locale === "zh" ? "font-semibold" : "text-muted"}
              >
                中文
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={locale === "en" ? "font-semibold" : "text-muted"}
              >
                EN
              </button>
            </div>
            <div className="px-2 pt-2">
              <a
                href="#experience"
                className="inline-flex w-full items-center justify-center rounded-md bg-cta px-7 py-3 text-sm font-medium text-cta-foreground"
                onClick={() => setOpen(false)}
              >
                {t(homeContent.hero.start)}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
