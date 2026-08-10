"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { HEADER_HEIGHT } from "@/components/layout/SiteHeader";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const animate = ready && !reduce;

  return (
    <section
      className="relative overflow-hidden bg-background"
      style={{ paddingTop: HEADER_HEIGHT, minHeight: "100svh" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-[22%] h-[280px] w-[280px] rounded-full border border-heading/10 sm:-right-24 sm:h-[420px] sm:w-[420px] md:top-[20%] md:h-[520px] md:w-[520px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-[32%] h-[180px] w-[180px] rounded-full border border-heading/10 sm:h-[280px] sm:w-[280px] md:h-[360px] md:w-[360px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-8 top-[42%] hidden h-[140px] w-[140px] rounded-full border border-heading/10 sm:block md:right-24 md:h-[200px] md:w-[200px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-24 left-4 hidden grid-cols-4 gap-2 opacity-40 sm:grid"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-heading/50" />
        ))}
      </div>

      <Container className="relative z-10 flex min-h-[calc(100svh-72px)] flex-col items-center justify-center px-5 pb-24 pt-8 text-center sm:pb-20">
        <div className="w-full max-w-3xl">
          <motion.h1
            initial={animate ? { opacity: 0, y: 28 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-serif-cn text-[2rem] leading-snug text-heading sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            {t(homeContent.hero.title)}
          </motion.h1>

          <motion.p
            initial={animate ? { opacity: 0, y: 18 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg"
          >
            {t(homeContent.hero.subtitle)}
          </motion.p>

          <motion.div
            initial={animate ? { opacity: 0, y: 14 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease }}
            className="mt-8 sm:mt-9"
          >
            <Button href="#entries" className="min-w-[9.5rem] sm:min-w-[10rem]">
              {t(homeContent.hero.cta)}
            </Button>
          </motion.div>
        </div>

        <a
          href="#join"
          className="absolute bottom-6 inline-flex flex-col items-center gap-2 text-muted sm:bottom-8"
          aria-label="Scroll"
        >
          <span className="text-[10px] uppercase tracking-[0.28em]">Scroll</span>
          <span className="block h-5 w-px bg-heading/40" />
          <span className="text-lg leading-none">↓</span>
        </a>
      </Container>
    </section>
  );
}
