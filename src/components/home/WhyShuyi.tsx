"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function WhyShuyi() {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-sm text-accent">{t(homeContent.why.eyebrow)}</p>
            <h2 className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl">
              {t(homeContent.why.title)}
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeContent.why.items.map((item) => (
            <Reveal key={item.title.zh}>
              <article className="flex gap-3">
                <span className="mt-1 text-accent">◇</span>
                <div>
                  <h3 className="font-medium text-heading">{t(item.title)}</h3>
                  <p className="mt-1 text-sm text-muted">{t(item.body)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
