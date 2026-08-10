"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function MembershipPreview() {
  const { t, locale } = useLanguage();

  return (
    <section id="membership" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-sm text-accent">{t(homeContent.membership.eyebrow)}</p>
            <h2 className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl">
              {t(homeContent.membership.title)}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted sm:text-base">
              {t(homeContent.membership.subtitle)}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-border bg-surface p-7 shadow-[var(--shadow)]">
              <div className="text-accent">✦</div>
              <h3 className="mt-3 text-xl text-heading">
                {t(homeContent.membership.free.title)}
              </h3>
              <p className="mt-2 text-2xl font-semibold text-heading">
                {t(homeContent.membership.free.tag)}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {homeContent.membership.free.points[locale].map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href="#entries" variant="secondary">
                  {t(homeContent.membership.free.cta)}
                </Button>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="relative h-full rounded-2xl border border-border bg-surface p-7 shadow-[var(--shadow)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cta px-3 py-1 text-[11px] font-medium text-cta-foreground">
                {t(homeContent.membership.elite.badge)}
              </span>
              <div className="text-accent">♛</div>
              <h3 className="mt-3 text-xl text-heading">
                {t(homeContent.membership.elite.title)}
              </h3>
              <p className="mt-2 text-2xl font-semibold text-heading">
                {t(homeContent.membership.elite.tag)}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {homeContent.membership.elite.points[locale].map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href="/membership">
                  {t(homeContent.membership.elite.cta)}
                </Button>
              </div>
            </article>
          </Reveal>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted">
          {t(homeContent.membership.note)}
        </p>
      </Container>
    </section>
  );
}
