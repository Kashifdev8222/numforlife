"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function ExperienceShowcase() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const chapters = homeContent.journey.chapters;
  const [active, setActive] = useState(0);
  const current = chapters[active];

  return (
    <section id="experience" className="scroll-mt-24 bg-background py-16 sm:py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-[0.34em] text-accent"
          >
            {t(homeContent.journey.eyebrow)}
          </motion.p>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl"
          >
            {t(homeContent.journey.title)}
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base"
          >
            {t(homeContent.journey.subtitle)}
          </motion.p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:mt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* Interactive selectors — dense, no empty scroll */}
          <div className="flex flex-col gap-3">
            {chapters.map((item, index) => {
              const selected = active === index;
              return (
                <motion.button
                  key={item.title.zh}
                  type="button"
                  onClick={() => setActive(index)}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={`group relative overflow-hidden rounded-2xl border px-5 py-5 text-left transition duration-300 sm:px-6 sm:py-6 ${
                    selected
                      ? "border-accent/50 bg-surface shadow-[var(--shadow)]"
                      : "border-border bg-surface/50 hover:border-accent/30 hover:bg-surface"
                  }`}
                >
                  {selected ? (
                    <motion.span
                      layoutId="experience-active"
                      className="absolute inset-y-3 left-0 w-1 rounded-full bg-cta"
                    />
                  ) : null}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-medium tracking-[0.28em] text-accent">
                        {t(item.tag)}
                      </p>
                      <h3 className="mt-2 font-serif-cn text-xl text-heading sm:text-2xl">
                        {t(item.title)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {t(item.body)}
                      </p>
                    </div>
                    <span
                      className={`mt-1 text-sm transition ${
                        selected ? "text-cta" : "text-muted group-hover:text-heading"
                      }`}
                    >
                      {selected ? "●" : "○"}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Image stage + CTA */}
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-border bg-surface-muted sm:min-h-[480px] lg:min-h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heading/70 via-heading/15 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title.zh}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[11px] tracking-[0.28em] text-accent">
                    {t(current.tag)}
                  </p>
                  <p className="mt-2 font-serif-cn text-2xl text-[#f7f1e8] sm:text-3xl">
                    {t(current.title)}
                  </p>
                  <Link
                    href={current.href}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-cta px-5 py-2.5 text-sm font-medium text-cta-foreground transition hover:brightness-110"
                  >
                    {t(current.cta)}
                    <span aria-hidden>→</span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
