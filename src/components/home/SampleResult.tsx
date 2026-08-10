"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const copy = {
  eyebrow: { zh: "样例结果", en: "Sample result" },
  title: { zh: "预览级结果长这样", en: "This is a preview-level result" },
  summary: {
    zh: "今日能量偏向「沟通与表达」。适合推进对话、整理思路；完整个人化解读请前往数易 App。",
    en: "Today’s energy leans toward communication. Good for conversations and clarity — full personalization continues in the Shuyi App.",
  },
  disclaimer: {
    zh: "此结果为简版预览。如需查看完整个人化解读，请前往数易 App。",
    en: "This is a simplified preview. For a complete personalized interpretation, please continue in the Shuyi App.",
  },
  cta: { zh: "前往 App 查看完整解读", en: "Open App for full reading" },
} as const;

export function SampleResult() {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <p className="text-sm text-accent">{t(copy.eyebrow)}</p>
            <h2 className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl">
              {t(copy.title)}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow)] sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
                Preview only
              </p>
              <p className="mt-4 text-base leading-relaxed text-heading sm:text-lg">
                {t(copy.summary)}
              </p>
              <p className="mt-5 border-t border-border pt-4 text-sm text-muted">
                {t(copy.disclaimer)}
              </p>
              <div className="mt-6">
                <Button href="#join">{t(copy.cta)}</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
