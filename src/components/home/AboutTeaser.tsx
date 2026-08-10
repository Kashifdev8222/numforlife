"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function AboutTeaser() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <Container className="max-w-3xl text-center">
        <Reveal>
          <p className="text-sm text-accent">{t(homeContent.about.eyebrow)}</p>
          <h2 className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl">
            {t(homeContent.about.title)}
          </h2>
          <div className="mt-8 space-y-4 text-left text-[15px] leading-relaxed text-muted sm:text-center sm:text-base">
            {homeContent.about.body.map((p) => (
              <p key={p.zh}>{t(p)}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-12 max-w-md">
            <div className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-accent/35" />
            <ul className="relative space-y-8">
              {homeContent.about.timeline.map((item) => (
                <li key={item.year} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <span
                    className={`text-right text-sm ${
                      "highlight" in item && item.highlight
                        ? "font-semibold text-cta"
                        : "text-heading"
                    }`}
                  >
                    {item.year}
                  </span>
                  <span className="relative z-10 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                  <span
                    className={`text-left text-sm ${
                      "highlight" in item && item.highlight
                        ? "font-medium text-cta"
                        : "text-muted"
                    }`}
                  >
                    {t(item.label)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <Button href="/about" variant="secondary">
              {t(homeContent.about.cta)}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
