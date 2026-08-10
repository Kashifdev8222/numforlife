"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

const view = { once: false, amount: 0.25 as const };
const ease = [0.22, 1, 0.36, 1] as const;

export function AboutSection() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-24 bg-surface-muted/40 py-16 sm:py-20 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.65, ease }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]"
          >
            <Image
              src="/images/chapter-life.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heading/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[11px] tracking-[0.28em] text-accent">NUMFORLIFE</p>
              <p className="mt-1 font-serif-cn text-2xl text-[#f7f1e8]">
                {t({ zh: "觉察 · 选择 · 改变", en: "Awareness · Choice · Change" })}
              </p>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              className="text-xs font-medium tracking-[0.34em] text-accent"
            >
              {t(homeContent.about.eyebrow)}
            </motion.p>
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={{ delay: 0.05 }}
              className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl"
            >
              {t(homeContent.about.title)}
            </motion.h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              {homeContent.about.body.map((p, i) => (
                <motion.p
                  key={p.zh}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={view}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  {t(p)}
                </motion.p>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {homeContent.about.timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={view}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className={`rounded-xl border px-4 py-4 ${
                    "highlight" in item && item.highlight
                      ? "border-cta/40 bg-surface"
                      : "border-border bg-surface/70"
                  }`}
                >
                  <p
                    className={`font-display text-xl italic ${
                      "highlight" in item && item.highlight ? "text-cta" : "text-accent"
                    }`}
                  >
                    {item.year}
                  </p>
                  <p className="mt-1 text-xs text-muted">{t(item.label)}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-heading underline-offset-4 hover:text-cta hover:underline"
              >
                {t(homeContent.about.cta)}
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
