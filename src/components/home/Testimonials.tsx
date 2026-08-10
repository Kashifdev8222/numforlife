"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="scroll-mt-24 bg-background py-20">
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-xs tracking-[0.2em] text-accent">
              {t(homeContent.testimonials.eyebrow)}
            </p>
            <h2 className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl">
              {t(homeContent.testimonials.title)}
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {homeContent.testimonials.items.map((item) => (
            <Reveal key={item.author.zh}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow)]">
                <div className="text-3xl text-heading/20">“</div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-heading">
                  {t(item.quote)}
                </p>
                <div className="mt-6 border-t border-border pt-4 text-sm text-muted">
                  {t(item.author)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
