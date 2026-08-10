"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { homeContent, navLinks } from "@/content/home";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-surface-muted/40 py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif-cn text-2xl text-heading">{t(homeContent.brand)}</p>
          <p className="mt-1 text-[10px] tracking-[0.22em] text-muted">{homeContent.brandEn}</p>
          <p className="mt-3 max-w-sm text-sm text-muted">{t(homeContent.footer.blurb)}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-cta">
              {t(link.label)}
            </Link>
          ))}
        </div>
      </Container>
      <Container className="mt-8">
        <p className="text-xs text-muted/80">{t(homeContent.footer.demo)}</p>
      </Container>
    </footer>
  );
}
