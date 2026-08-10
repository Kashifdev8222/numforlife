"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function AppDownload() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="join" className="scroll-mt-24 bg-surface py-14 sm:py-16">
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M11 18h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="font-serif-cn text-2xl text-heading sm:text-3xl">
              {t(homeContent.download.title)}
            </h2>

            <form
              onSubmit={onSubmit}
              className="mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="tel"
                required
                placeholder={t(homeContent.download.phone)}
                className="h-11 flex-1 rounded-full border border-border bg-background px-5 text-sm outline-none ring-ring focus:ring-2"
              />
              <Button type="submit" className="h-11 bg-accent px-6 text-cta-foreground hover:brightness-105">
                {t(homeContent.download.send)}
              </Button>
            </form>
            {sent ? (
              <p className="mt-3 text-sm text-muted">{t(homeContent.download.note)}</p>
            ) : null}

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-heading/20 px-5 py-2 text-sm text-heading transition hover:border-accent"
              >
                Google Play
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-heading/20 px-5 py-2 text-sm text-heading transition hover:border-accent"
              >
                App Store
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
