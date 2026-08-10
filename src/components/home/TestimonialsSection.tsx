"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

const view = { once: false, amount: 0.2 as const };
const ease = [0.22, 1, 0.36, 1] as const;

export function TestimonialsSection() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="stories" className="scroll-mt-24 bg-background py-16 sm:py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            className="text-xs font-medium tracking-[0.34em] text-accent"
          >
            {t(homeContent.testimonials.eyebrow)}
          </motion.p>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ delay: 0.05, duration: 0.6, ease }}
            className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl"
          >
            {t(homeContent.testimonials.title)}
          </motion.h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {homeContent.testimonials.items.map((item, index) => (
            <motion.blockquote
              key={item.author.zh}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={{ delay: index * 0.08, duration: 0.55, ease }}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface px-6 py-7 shadow-[var(--shadow)]"
            >
              <p className="font-display text-4xl leading-none text-accent/50">“</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[15px]">
                {t(item.quote)}
              </p>
              <footer className="mt-6 border-t border-border pt-4 text-sm font-medium text-heading">
                {t(item.author)}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
