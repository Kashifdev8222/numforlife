"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function Partners() {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-16">
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-sm text-accent">{t(homeContent.partners.eyebrow)}</p>
            <h2 className="mt-3 font-display text-3xl tracking-wide text-heading sm:text-4xl">
              {t(homeContent.partners.title)}
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {["SKKER", "KCC"].map((name) => (
              <div
                key={name}
                className="rounded-2xl border border-border bg-surface px-10 py-6 text-lg font-semibold tracking-widest text-heading shadow-[var(--shadow)]"
              >
                {name}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
