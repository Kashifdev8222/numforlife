"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

const AUTO_MS = 5000;
const ease = [0.22, 1, 0.36, 1] as const;
const view = { once: false, amount: 0.25 as const };

export function ExperienceShowcase() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const chapters = homeContent.journey.chapters;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = chapters[active];

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % chapters.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [reduce, paused, chapters.length]);

  const select = (index: number) => {
    setActive(index);
    setPaused(true);
    window.setTimeout(() => setPaused(false), AUTO_MS * 1.2);
  };

  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-background py-14 sm:py-16 md:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.55, ease }}
            className="text-xs font-medium tracking-[0.34em] text-accent"
          >
            {t(homeContent.journey.eyebrow)}
          </motion.p>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl"
          >
            {t(homeContent.journey.title)}
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base"
          >
            {t(homeContent.journey.subtitle)}
          </motion.p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <div className="flex flex-col gap-3">
            {chapters.map((item, index) => {
              const selected = active === index;
              return (
                <motion.button
                  key={item.title.zh}
                  type="button"
                  onClick={() => select(index)}
                  initial={reduce ? false : { opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={view}
                  transition={{ duration: 0.5, delay: index * 0.06, ease }}
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

                  {/* Auto progress on active card */}
                  {selected && !reduce ? (
                    <motion.span
                      key={`progress-${active}-${paused}`}
                      className="absolute bottom-0 left-0 h-0.5 bg-accent/70"
                      initial={{ width: "0%" }}
                      animate={{ width: paused ? "0%" : "100%" }}
                      transition={
                        paused
                          ? { duration: 0.2 }
                          : { duration: AUTO_MS / 1000, ease: "linear" }
                      }
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
                      <p className="mt-2 text-sm leading-relaxed text-muted">{t(item.body)}</p>
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

            <div className="mt-2 flex items-center justify-center gap-2 lg:justify-start">
              {chapters.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => select(index)}
                  className={`h-2 rounded-full transition-all ${
                    active === index ? "w-7 bg-cta" : "w-2 bg-heading/20 hover:bg-heading/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.65, ease }}
            className="relative min-h-[420px] overflow-hidden rounded-2xl border border-border bg-surface-muted sm:min-h-[480px] lg:min-h-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={reduce ? false : { opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-heading/75 via-heading/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title.zh}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <p className="text-[11px] tracking-[0.28em] text-accent">{t(current.tag)}</p>
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
