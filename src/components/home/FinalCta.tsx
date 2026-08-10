"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-border bg-surface px-6 py-12 text-center shadow-[var(--shadow)] sm:px-10">
            <h2 className="font-serif-cn text-3xl text-heading sm:text-4xl">
              {t(homeContent.finalCta.title)}
            </h2>
            <p className="mt-4 text-muted">{t(homeContent.finalCta.body)}</p>
            <div className="mt-8">
              <Button href="#entries">{t(homeContent.finalCta.cta)}</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
