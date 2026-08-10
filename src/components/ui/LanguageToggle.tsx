"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/cn";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Toggle language"
      className={cn(
        "inline-flex h-10 items-center rounded-full border border-border bg-surface/80 px-3.5 text-xs font-semibold tracking-wider text-heading transition hover:border-accent/40 hover:bg-accent-soft",
        className,
      )}
    >
      {locale === "zh" ? "EN" : "中文"}
    </button>
  );
}
