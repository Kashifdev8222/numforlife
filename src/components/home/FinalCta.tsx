"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function FinalCta() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="join" className="scroll-mt-24 bg-background pb-20 pt-4 sm:pb-28">
      <Container>
        <div className="border border-border bg-surface-muted/60 px-6 py-14 text-center sm:px-10 sm:py-16">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.32em] text-accent"
          >
            {homeContent.brandEn}
          </motion.p>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mx-auto mt-4 max-w-xl font-serif-cn text-3xl text-heading sm:text-4xl"
          >
            {t(homeContent.finalCta.title)}
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-md text-sm text-muted sm:text-base"
          >
            {t(homeContent.finalCta.body)}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8"
          >
            <a
              href="#entries"
              className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-cta px-8 py-3.5 text-sm font-medium text-cta-foreground transition hover:brightness-110"
            >
              {t(homeContent.finalCta.cta)}
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
