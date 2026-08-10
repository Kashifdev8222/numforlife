"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
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

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <motion.div style={{ y: reduce ? 0 : imageY, scale: reduce ? 1.05 : imageScale }} className="absolute inset-0">
        <Image
          src="/images/hero-atmosphere.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,14,12,0.55)_0%,rgba(15,14,12,0.35)_40%,rgba(15,14,12,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(198,161,92,0.14),transparent_50%)]" />
      </motion.div>

      <motion.div
        style={{ y: reduce ? 0 : contentY, opacity: reduce ? 1 : contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-[11px] tracking-[0.48em] text-accent sm:text-xs"
        >
          {homeContent.brandEn}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="mt-5 font-serif-cn text-[3rem] leading-[1.1] text-heading sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {t(homeContent.brand)}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease }}
          className="mt-4 font-display text-2xl italic text-foreground/90 sm:text-3xl md:text-4xl"
        >
          {t(homeContent.hero.line)}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease }}
          className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted sm:text-base"
        >
          {t(homeContent.hero.subtitle)}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.46, ease }}
          className="mt-10"
        >
          <a
            href="#journey"
            className="group relative inline-flex min-w-[11rem] items-center justify-center overflow-hidden rounded-sm bg-cta px-9 py-3.5 text-sm font-medium tracking-wide text-cta-foreground"
          >
            <span className="absolute inset-0 translate-y-full bg-heading transition duration-500 group-hover:translate-y-0" />
            <span className="relative z-10 transition group-hover:text-ink">{t(homeContent.hero.cta)}</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#journey"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-muted"
        aria-label="Scroll to journey"
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-border">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-accent"
            animate={reduce ? undefined : { y: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
