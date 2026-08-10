"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

const CTA_IMAGE =
  "https://numforlife.com/wp-content/uploads/2025/06/GettyImages-1317309593.avif";

export function FinalCta() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="join" className="scroll-mt-24 bg-background pb-20 pt-6 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-sm">
          <div className="absolute inset-0">
            <Image src={CTA_IMAGE} alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(14,11,9,0.9)_15%,rgba(14,11,9,0.55)_100%)]" />
          </div>

          <div className="relative z-10 px-6 py-16 text-center sm:px-10 sm:py-20 md:py-24">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] tracking-[0.35em] text-gold"
            >
              {homeContent.brandEn}
            </motion.p>
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mx-auto mt-4 max-w-2xl font-serif-cn text-3xl text-[#f7efe4] sm:text-5xl"
            >
              {t(homeContent.finalCta.title)}
            </motion.h2>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="mx-auto mt-4 max-w-lg text-sm text-[#d5c6b1] sm:text-base"
            >
              {t(homeContent.finalCta.body)}
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="#experience"
                className="inline-flex min-w-[11rem] items-center justify-center rounded-md bg-cta px-8 py-3.5 text-sm font-medium text-cta-foreground transition hover:brightness-110"
              >
                {t(homeContent.finalCta.cta)}
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
