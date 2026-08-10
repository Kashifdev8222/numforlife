"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState, type MouseEvent } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

type Card = (typeof homeContent.experience.cards)[number];

function TarotCard({
  card,
  index,
  selected,
  revealed,
  onSelect,
  reduce,
}: {
  card: Card;
  index: number;
  selected: boolean;
  revealed: boolean;
  onSelect: () => void;
  reduce: boolean | null;
}) {
  const { t } = useLanguage();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-40, 40], [10, -10]), { stiffness: 120, damping: 16 });
  const ry = useSpring(useTransform(x, [-40, 40], [-12, 12]), { stiffness: 120, damping: 16 });

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (reduce || revealed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const fan = (index - 1) * 9;
  const lift = selected ? -18 : 0;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={reduce ? false : { opacity: 0, y: 40, rotate: fan }}
      whileInView={{ opacity: 1, y: lift, rotate: revealed ? 0 : fan }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX: reduce || revealed ? 0 : rx,
        rotateY: reduce || revealed ? 0 : ry,
        transformPerspective: 900,
      }}
      className="group relative h-[280px] w-[180px] shrink-0 [transform-style:preserve-3d] sm:h-[320px] sm:w-[210px]"
      aria-pressed={selected}
    >
      <motion.div
        animate={{ rotateY: revealed ? 180 : 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        <div className="tarot-back absolute inset-0 overflow-hidden rounded-xl border border-gold/40 shadow-[0_25px_60px_rgba(0,0,0,0.35)] [backface-visibility:hidden]">
          <div className="absolute inset-3 rounded-lg border border-gold/25" />
          <div className="absolute inset-0 opacity-40 tarot-glow" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gold">
            <span className="font-serif-cn text-3xl">易</span>
            <span className="text-[10px] tracking-[0.35em] text-gold/80">NUMFORLIFE</span>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] tracking-[0.2em] text-gold/70">
            {t({ zh: "点击翻开", en: "Tap to reveal" })}
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden rounded-xl border border-gold/50 bg-surface text-heading shadow-[0_25px_60px_rgba(0,0,0,0.35)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="absolute inset-0 tarot-front-glow" />
          <div className="relative flex h-full flex-col px-5 py-6 text-left">
            <p className="text-[10px] tracking-[0.28em] text-accent">{card.arcana}</p>
            <h3 className="mt-3 font-serif-cn text-2xl leading-tight">{t(card.title)}</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{t(card.body)}</p>
            <p className="text-xs tracking-wide text-cta">{t(card.cue)}</p>
          </div>
        </div>
      </motion.div>
    </motion.button>
  );
}

export function TarotExperience() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-20 text-[color:var(--foreground)] sm:py-28"
      style={{ color: "#f3ebe0" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "rgba(122, 52, 41, 0.3)" }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.35em] text-gold"
          >
            {t(homeContent.experience.eyebrow)}
          </motion.p>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 font-serif-cn text-3xl sm:text-5xl"
            style={{ color: "#f7efe4" }}
          >
            {t(homeContent.experience.title)}
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed sm:text-base"
            style={{ color: "#cfc0ab" }}
          >
            {t(homeContent.experience.subtitle)}
          </motion.p>
        </div>

        <div className="mt-14 flex flex-wrap items-end justify-center gap-4 sm:gap-6 md:mt-16">
          {homeContent.experience.cards.map((card, index) => (
            <TarotCard
              key={card.arcana}
              card={card}
              index={index}
              selected={active === index}
              revealed={active === index}
              reduce={reduce}
              onSelect={() => setActive((prev) => (prev === index ? null : index))}
            />
          ))}
        </div>

        <div className="mx-auto mt-12 min-h-[5.5rem] max-w-xl text-center">
          <AnimatePresence mode="wait">
            {active !== null ? (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-display text-xl italic text-gold sm:text-2xl">
                  {t(homeContent.experience.cards[active].insight)}
                </p>
                <p className="mt-3 text-sm" style={{ color: "#b9a992" }}>
                  {t(homeContent.experience.note)}
                </p>
              </motion.div>
            ) : (
              <motion.p
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm"
                style={{ color: "#a89780" }}
              >
                {t(homeContent.experience.hint)}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
