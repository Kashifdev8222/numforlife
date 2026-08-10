"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

const view = { once: false, amount: 0.3 as const };
const ease = [0.22, 1, 0.36, 1] as const;

export function TarotLiteSection() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="tarot-lite" className="scroll-mt-24 bg-background py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border">
          <div className="absolute inset-0">
            <Image
              src="/images/chapter-tarot.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(20,17,14,0.92)_10%,rgba(20,17,14,0.72)_55%,rgba(20,17,14,0.45)_100%)]" />
          </div>

          <div className="relative z-10 grid gap-8 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.55, ease }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-accent"
              >
                {t(homeContent.tarotLite.badge)}
                <span className="text-white/50">·</span>
                {t(homeContent.tarotLite.preview)}
              </motion.div>

              <motion.h2
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ delay: 0.06, duration: 0.6, ease }}
                className="mt-5 font-serif-cn text-3xl text-[#f7f1e8] sm:text-4xl md:text-5xl"
              >
                {t(homeContent.tarotLite.title)}
              </motion.h2>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ delay: 0.12, duration: 0.55, ease }}
                className="mt-4 max-w-xl text-sm leading-relaxed text-[#d8cbb8] sm:text-base"
              >
                {t(homeContent.tarotLite.body)}
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ delay: 0.18, duration: 0.5, ease }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/tarot"
                  className="inline-flex items-center justify-center rounded-full bg-cta px-7 py-3 text-sm font-medium text-cta-foreground transition hover:brightness-110"
                >
                  {t(homeContent.tarotLite.cta)}
                </Link>
                <p className="text-xs text-[#b9a992]">{t(homeContent.tarotLite.note)}</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {homeContent.tarotLite.tags.map((tag, i) => (
                <motion.div
                  key={tag.zh}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={view}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.45, ease }}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-[#efe6d8] backdrop-blur-sm"
                >
                  {t(tag)}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
