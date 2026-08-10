"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { homeContent } from "@/content/home";

const ease = [0.22, 1, 0.36, 1] as const;

const HERO_IMAGE =
  "https://numforlife.com/wp-content/uploads/2025/06/77a7d0_e07c2a2eb04f4c3fa61a769470821a8cmv2.jpg";

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18 });
  const sy = useSpring(my, { stiffness: 40, damping: 18 });
  const ringTransform = useMotionTemplate`translate(${sx}px, ${sy}px)`;

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 28;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  const animate = ready && !reduce;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-[#f6efe6]">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center ${reduce ? "" : "animate-ken-burns"}`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,9,7,0.88)_8%,rgba(12,9,7,0.55)_48%,rgba(12,9,7,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(196,161,90,0.18),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <motion.div
        aria-hidden
        style={{ transform: reduce ? undefined : ringTransform }}
        className="pointer-events-none absolute -right-[12%] top-[18%] hidden h-[520px] w-[520px] md:block"
      >
        <div className="absolute inset-0 rounded-full border border-gold/25" />
        <div className="absolute inset-[12%] rounded-full border border-gold/20" />
        <div className="absolute inset-[28%] rounded-full border border-gold/15" />
        <div className="absolute inset-[42%] rounded-full border border-white/10 animate-pulse-ring" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-5 pb-24 pt-28 sm:px-8 sm:pb-28 lg:justify-center lg:pb-20">
        <div className="max-w-3xl">
          <motion.p
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-[11px] tracking-[0.42em] text-gold sm:text-xs"
          >
            {homeContent.brandEn}
          </motion.p>

          <motion.h1
            initial={animate ? { opacity: 0, y: 36 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="mt-4 font-serif-cn text-[2.75rem] leading-[1.12] tracking-wide text-[#f8f1e7] sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            {t(homeContent.brand)}
          </motion.h1>

          <motion.p
            initial={animate ? { opacity: 0, y: 22 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 font-display text-2xl italic text-[#f0e2cf] sm:text-3xl md:text-4xl"
          >
            {t(homeContent.hero.line)}
          </motion.p>

          <motion.p
            initial={animate ? { opacity: 0, y: 18 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28, ease }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-[#d9cbb8] sm:text-base md:text-lg"
          >
            {t(homeContent.hero.subtitle)}
          </motion.p>

          <motion.div
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#experience"
              className="inline-flex min-w-[10rem] items-center justify-center rounded-md bg-cta px-8 py-3.5 text-sm font-medium tracking-wide text-cta-foreground transition hover:brightness-110"
            >
              {t(homeContent.hero.cta)}
            </a>
            <a
              href="#paths"
              className="inline-flex items-center gap-2 text-sm text-[#e8dccb] transition hover:text-gold"
            >
              <span>{t(homeContent.hero.secondary)}</span>
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>
      </div>

      <a
        href="#experience"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#d4c4ae] sm:flex"
        aria-label="Scroll"
      >
        <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
        <span className="block h-8 w-px origin-top bg-gradient-to-b from-gold to-transparent" />
      </a>
    </section>
  );
}
