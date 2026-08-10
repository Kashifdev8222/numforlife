import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function CesuanPage() {
  return (
    <PageShell>
      <Container className="max-w-3xl py-12 sm:py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">测算预览</p>
        <h1 className="mt-4 font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl">
          测算 Lite（演示）
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          网站仅提供简版预览。完整个人化解读引导至数易 App。计算逻辑由 PHP API 提供。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/#entries">返回入口</Button>
          <Button href="/#join" variant="secondary">
            前往 App
          </Button>
        </div>
      </Container>
    </PageShell>
  );
}
