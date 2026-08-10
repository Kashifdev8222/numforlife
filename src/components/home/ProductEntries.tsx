"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function ProductEntries() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="entries" className="scroll-mt-24 bg-background py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] tracking-[0.32em] text-accent">
              {t(homeContent.entries.eyebrow)}
            </p>
            <h2 className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl">
              {t(homeContent.entries.title)}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
              {t(homeContent.entries.subtitle)}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.entries.items.map((item, index) => (
            <motion.div
              key={item.title.zh}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <Link
                href={item.href}
                className="group flex h-full flex-col border border-border bg-surface px-5 py-6 transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[var(--shadow)]"
              >
                <span className="font-display text-3xl italic text-accent/80">
                  0{index + 1}
                </span>
                <span className="mt-5 text-[11px] tracking-[0.18em] text-muted">
                  {t(item.badge)}
                </span>
                <h3 className="mt-2 font-serif-cn text-xl text-heading">
                  {t(item.title)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {t(item.body)}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-muted">{t(item.time)}</span>
                  <span className="text-heading transition group-hover:text-cta">
                    {t({ zh: "开始 →", en: "Start →" })}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
