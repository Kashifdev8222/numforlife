"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function FaqPreview() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-border/60 py-20">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="text-sm text-accent">{t(homeContent.faq.eyebrow)}</p>
          <h2 className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl">
            {t(homeContent.faq.title)}
          </h2>
        </Reveal>

        <div className="mt-8 divide-y divide-border">
          {homeContent.faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q.zh} className="py-4">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="text-base text-heading">{t(item.q)}</span>
                  <span className="text-accent">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted">{t(item.a)}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
