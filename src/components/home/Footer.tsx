"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { homeContent, navLinks } from "@/content/home";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background py-14">
      <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="font-serif-cn text-2xl text-heading">{t(homeContent.brand)}</p>
          <p className="mt-1 text-[10px] tracking-[0.22em] text-muted">
            {homeContent.brandEn}
          </p>
          <p className="mt-4 max-w-sm text-sm text-muted">{t(homeContent.footer.blurb)}</p>
          <p className="mt-3 text-xs text-muted/80">{t(homeContent.footer.demo)}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-heading">
            {t({ zh: "产品服务", en: "Services" })}
          </p>
          <div className="flex flex-col gap-2 text-sm text-muted">
            <Link href="#entries">{t({ zh: "测算入口", en: "Calculations" })}</Link>
            <Link href="/tarot">{t({ zh: "塔罗 Lite", en: "Tarot Lite" })}</Link>
            <Link href="/membership">{t({ zh: "会员", en: "Membership" })}</Link>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-heading">
            {t({ zh: "关于我们", en: "About" })}
          </p>
          <div className="flex flex-col gap-2 text-sm text-muted">
            <Link href="#about">{t({ zh: "品牌故事", en: "Brand story" })}</Link>
            <Link href="#join">{t({ zh: "加入我们", en: "Join us" })}</Link>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-heading">
            {t({ zh: "导航", en: "Navigate" })}
          </p>
          <div className="flex flex-col gap-2 text-sm text-muted">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {t(l.label)}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
