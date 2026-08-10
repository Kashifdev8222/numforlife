"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

const tones = ["bg-[#efe6ff] text-[#6b4aa8]", "bg-[#e5f0ff] text-[#3d6fad]", "bg-[#ffe8ef] text-[#b04b6d]", "bg-[#fff3d8] text-[#a87a20]"];

export function ProductEntries() {
  const { t } = useLanguage();

  return (
    <section id="entries" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-sm text-accent">{t(homeContent.entries.eyebrow)}</p>
            <h2 className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl">
              {t(homeContent.entries.title)}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted sm:text-base">
              {t(homeContent.entries.subtitle)}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
          {homeContent.entries.items.map((item, index) => (
            <Reveal key={item.title.zh} delay={index * 0.07}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow)] transition hover:-translate-y-1"
              >
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg ${tones[index]}`}
                >
                  {index + 1}
                </span>
                <span className="mt-4 text-[11px] tracking-wide text-muted">
                  {t(item.badge)}
                </span>
                <h3 className="mt-2 text-xl text-heading">{t(item.title)}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {t(item.body)}
                </p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-muted">{t(item.time)}</span>
                  <span className="font-medium text-heading group-hover:text-cta">
                    {t({ zh: "开始测算 →", en: "Start →" })}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
