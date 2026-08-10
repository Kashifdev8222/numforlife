"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { homeContent } from "@/content/home";

function ChapterImage({
  src,
  progress,
  index,
  reduce,
}: {
  src: string;
  progress: MotionValue<number>;
  index: number;
  reduce: boolean | null;
}) {
  const start = index / 3;
  const mid = start + 1 / 6;
  const end = (index + 1) / 3;
  const opacity = useTransform(progress, [start, mid, end], index === 0 ? [1, 1, 0] : [0, 1, index === 2 ? 1 : 0]);
  const scale = useTransform(progress, [start, mid, end], [1.1, 1, 1.04]);

  return (
    <motion.div
      style={{ opacity: reduce ? (index === 0 ? 1 : 0) : opacity }}
      className="absolute inset-0"
    >
      <motion.div style={{ scale: reduce ? 1 : scale }} className="absolute inset-0">
        <Image src={src} alt="" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" priority={index === 0} />
      </motion.div>
    </motion.div>
  );
}

function ChapterCopy({
  item,
  progress,
  index,
  reduce,
}: {
  item: (typeof homeContent.journey.chapters)[number];
  progress: MotionValue<number>;
  index: number;
  reduce: boolean | null;
}) {
  const { t } = useLanguage();
  const start = index / 3;
  const mid = start + 1 / 6;
  const end = (index + 1) / 3;
  const opacity = useTransform(
    progress,
    [start, mid - 0.02, mid + 0.1, end],
    index === 0 ? [1, 1, 1, 0] : index === 2 ? [0, 1, 1, 1] : [0, 1, 1, 0],
  );
  const y = useTransform(progress, [start, mid, end], [24, 0, -24]);

  return (
    <motion.div
      style={{ opacity: reduce ? (index === 0 ? 1 : 0) : opacity, y: reduce ? 0 : y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <p className="text-[11px] tracking-[0.34em] text-[#9a7b45]">{t(item.tag)}</p>
      <h3 className="mt-4 font-serif-cn text-3xl leading-snug text-[#1a140e] sm:text-4xl md:text-[2.75rem]">
        {t(item.title)}
      </h3>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-[#5c5146] sm:text-base">
        {t(item.body)}
      </p>
      <a
        href={item.href}
        className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#1a140e]/25 pb-1 text-sm text-[#1a140e] transition hover:border-[#9a7b45] hover:text-[#9a7b45]"
      >
        {t(item.cta)}
        <span aria-hidden>→</span>
      </a>
    </motion.div>
  );
}

export function ImmersiveJourney() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 24, mass: 0.4 });
  const barWidth = useMotionTemplate`${useTransform(progress, [0, 1], [0, 100])}%`;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 80, damping: 18 });
  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 80, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="journey" ref={containerRef} className="relative h-[300vh] bg-[#f4efe6]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-0">
          <div className="relative order-2 min-h-[300px] lg:order-1 lg:min-h-0 lg:py-16">
            <p className="mb-6 text-[11px] tracking-[0.34em] text-[#9a7b45]">
              {t(homeContent.journey.eyebrow)}
            </p>
            <h2 className="font-serif-cn text-3xl text-[#1a140e] sm:text-4xl md:text-5xl">
              {t(homeContent.journey.title)}
            </h2>
            <p className="mt-4 max-w-md text-sm text-[#5c5146] sm:text-base">
              {t(homeContent.journey.subtitle)}
            </p>

            <div className="relative mt-10 h-[230px] sm:h-[250px]">
              {homeContent.journey.chapters.map((item, index) => (
                <ChapterCopy
                  key={item.title.zh}
                  item={item}
                  index={index}
                  progress={progress}
                  reduce={reduce}
                />
              ))}
            </div>

            <div className="mt-8">
              <div className="h-px w-full bg-[#1a140e]/10">
                <motion.div className="h-px bg-[#9a7b45]" style={{ width: barWidth }} />
              </div>
              <div className="mt-3 flex justify-between text-[10px] tracking-[0.22em] text-[#1a140e]/40">
                <span>01</span>
                <span>02</span>
                <span>03</span>
              </div>
            </div>
          </div>

          <div
            className="relative order-1 aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4] lg:order-2 lg:aspect-[4/5] lg:max-h-[78vh]"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ perspective: 1200 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                rotateX: reduce ? 0 : tiltX,
                rotateY: reduce ? 0 : tiltY,
                transformStyle: "preserve-3d",
              }}
            >
              {homeContent.journey.chapters.map((item, index) => (
                <ChapterImage
                  key={item.image}
                  src={item.image}
                  index={index}
                  progress={progress}
                  reduce={reduce}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
