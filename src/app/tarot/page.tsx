import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function TarotLitePage() {
  return (
    <PageShell>
      <Container className="max-w-3xl py-12 sm:py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">Tarot Lite</p>
        <h1 className="mt-4 font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl">
          塔罗 Lite（演示）
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          按 PRD：提问 → 抽牌动画 → 简版解读 → App CTA。真实流程与 PHP API 在下一阶段接入。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/#entries">返回测算入口</Button>
          <Button href="/#join" variant="secondary">
            前往 App
          </Button>
        </div>
      </Container>
    </PageShell>
  );
}
