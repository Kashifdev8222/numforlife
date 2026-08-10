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

  // Vertical only — no sideways shift
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-background"
      style={{ paddingTop: HEADER_HEIGHT, minHeight: "100svh" }}
    >
      <div className="absolute inset-0">
        <motion.div
          style={{ y: reduce ? 0 : imageY, scale: reduce ? 1.04 : imageScale }}
          className="absolute inset-[-4%]"
        >
          <Image
            src="/images/hero-atmosphere.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center] opacity-90 dark:opacity-100"
          />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      {/* Refined orbital mark — not thin floating rings */}
      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.35, ease }}
        className="pointer-events-none absolute right-[-8%] top-[18%] hidden h-[420px] w-[420px] md:block lg:right-[4%] lg:top-[20%] lg:h-[480px] lg:w-[480px]"
      >
        <motion.div
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-accent/25"
        />
        <div className="absolute inset-[11%] rounded-full border border-heading/10" />
        <div className="absolute inset-[24%] rounded-full border border-accent/20" />
        <div className="absolute inset-[38%] rounded-full bg-accent/5 backdrop-blur-[1px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif-cn text-5xl text-accent/50 lg:text-6xl">易</span>
        </div>
        <motion.div
          className="absolute inset-0"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_rgba(154,123,69,0.55)]" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: reduce ? 1 : contentOpacity }}
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
