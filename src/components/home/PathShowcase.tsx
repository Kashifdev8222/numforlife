"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

function PathPanel({
  item,
  index,
}: {
  item: (typeof homeContent.paths.items)[number];
  index: number;
}) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [48, -48]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [1.08, 1, 1.04]);

  const reverse = index % 2 === 1;

  return (
    <article
      ref={ref}
      className={`grid items-center gap-8 py-10 md:grid-cols-2 md:gap-14 md:py-16 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[5/4] md:aspect-[4/5]">
        <motion.div style={{ y: imageY, scale }} className="absolute inset-[-8%]">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[#f6efe6]">
          <span className="font-display text-4xl italic text-gold/90">0{index + 1}</span>
          <span className="text-[10px] tracking-[0.28em] text-[#e8dccb]">{t(item.tag)}</span>
        </div>
      </div>

      <div>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[11px] tracking-[0.3em] text-accent"
        >
          {t(item.tag)}
        </motion.p>
        <motion.h3
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.06 }}
          className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl"
        >
          {t(item.title)}
        </motion.h3>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.12 }}
          className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base"
        >
          {t(item.body)}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.18 }}
          className="mt-7"
        >
          <Link
            href={item.href}
            className="inline-flex items-center gap-2 border-b border-heading/30 pb-1 text-sm font-medium text-heading transition hover:border-cta hover:text-cta"
          >
            {t(item.cta)}
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </article>
  );
}

export function PathShowcase() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section id="paths" className="scroll-mt-24 bg-background py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.35em] text-accent"
          >
            {t(homeContent.paths.eyebrow)}
          </motion.p>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-4 font-serif-cn text-3xl text-heading sm:text-5xl"
          >
            {t(homeContent.paths.title)}
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base"
          >
            {t(homeContent.paths.subtitle)}
          </motion.p>
        </div>

        <div className="mt-6 md:mt-10">
          {homeContent.paths.items.map((item, index) => (
            <PathPanel key={item.title.zh} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
