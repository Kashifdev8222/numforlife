"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function TarotLiteBanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-background pb-20">
      <Container>
        <Reveal>
          <div className="rounded-[1.75rem] bg-surface-muted px-6 py-12 text-center sm:px-10 sm:py-14">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full bg-[#6b4aa8]/15 px-3 py-1 text-xs font-medium text-[#6b4aa8]">
                # {t(homeContent.tarotLite.badge)}
              </span>
              <span className="rounded-full bg-heading/5 px-3 py-1 text-xs text-muted">
                {t(homeContent.tarotLite.preview)}
              </span>
            </div>

            <h2 className="mt-5 font-serif-cn text-3xl text-heading sm:text-4xl">
              {t(homeContent.tarotLite.title)}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {t(homeContent.tarotLite.body)}
            </p>
            <p className="mt-3 text-xs text-muted">{t(homeContent.tarotLite.note)}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/tarot">{t(homeContent.tarotLite.cta)}</Button>
              <Button href="/tarot" variant="secondary">
                {t(homeContent.tarotLite.more)}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted sm:text-sm">
              {homeContent.tarotLite.tags.map((tag) => (
                <span key={tag.zh}>{t(tag)}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
