"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function Guidance() {
  const { t } = useLanguage();

  return (
    <section id="results" className="scroll-mt-24 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-xs tracking-[0.22em] text-accent">
              {t(homeContent.results.eyebrow)}
            </p>
            <h2 className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl">
              {t(homeContent.results.title)}
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {homeContent.results.items.map((item) => (
            <Reveal key={item.title.zh}>
              <article className="rounded-2xl border border-border bg-background p-6">
                <div className="text-accent">✦</div>
                <h3 className="mt-4 font-serif-cn text-2xl text-heading">
                  {t(item.title)}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.title.en}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
