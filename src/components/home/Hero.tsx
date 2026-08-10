"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HEADER_HEIGHT } from "@/components/layout/SiteHeader";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { homeContent } from "@/content/home";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageX = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-background"
      style={{ paddingTop: HEADER_HEIGHT, minHeight: "100svh" }}
    >
      {/* Full-bleed visual plane */}
      <div className="absolute inset-0">
        <motion.div style={{ x: reduce ? 0 : imageX }} className="absolute inset-0">
          <Image
            src="/images/hero-atmosphere.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] opacity-90 dark:opacity-100"
          />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-[28%] h-[260px] w-[260px] rounded-full border border-heading/10 sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-4 top-[40%] h-[160px] w-[160px] rounded-full border border-heading/10 sm:h-[240px] sm:w-[240px]"
      />

      <motion.div
        style={{ y: reduce ? 0 : textY }}
        className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-xs font-medium tracking-[0.4em] text-accent"
          >
            {homeContent.brandEn}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="mt-4 font-serif-cn text-[2.6rem] leading-[1.15] text-heading sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            {t(homeContent.brand)}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-3 font-display text-2xl italic text-heading/85 sm:text-3xl"
          >
            {t(homeContent.hero.line)}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease }}
            className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base"
          >
            {t(homeContent.hero.subtitle)}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#experience"
              className="inline-flex min-w-[10.5rem] items-center justify-center rounded-full bg-cta px-8 py-3.5 text-sm font-medium text-cta-foreground transition hover:brightness-110"
            >
              {t(homeContent.hero.cta)}
            </a>
            <a
              href="/tarot"
              className="text-sm font-medium text-heading underline-offset-4 transition hover:text-cta hover:underline"
            >
              {t(homeContent.hero.secondary)}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
