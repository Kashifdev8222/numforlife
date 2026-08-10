"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

const icons = ["◎", "▣", "⚙", "▤", "☺"];

export function Ecosystem() {
  const { t } = useLanguage();
  const items = homeContent.ecosystem.items;
  const top = items.slice(0, 3);
  const bottom = items.slice(3);

  return (
    <section id="services" className="scroll-mt-24 bg-background py-16 sm:py-20 md:py-24">
      <Container>
        <Reveal>
          <div className="text-center">
            <h2 className="font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl">
              {t(homeContent.ecosystem.title)}
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              {t(homeContent.ecosystem.subtitle)}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {top.map((item, index) => (
            <Reveal key={item.title.zh} delay={index * 0.06}>
              <article className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow)] sm:p-6">
                <div className="text-xl text-accent">{icons[index]}</div>
                <h3 className="mt-4 text-lg font-medium text-heading">{t(item.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(item.body)}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-4 grid max-w-3xl gap-4 sm:grid-cols-2">
          {bottom.map((item, index) => (
            <Reveal key={item.title.zh} delay={(index + 3) * 0.06}>
              <article className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow)] sm:p-6">
                <div className="text-xl text-accent">{icons[index + 3]}</div>
                <h3 className="mt-4 text-lg font-medium text-heading">{t(item.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(item.body)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
