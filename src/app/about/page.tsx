import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <PageShell>
      <Container className="max-w-3xl py-12 sm:py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">ABOUT</p>
        <h1 className="mt-4 font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl">
          关于我们
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          完整 About 内容将按 PRD 下一阶段完善。本演示聚焦首页设计、交互与响应式体验。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/#about">查看首页关于区</Button>
          <Button href="/" variant="secondary">
            返回首页
          </Button>
        </div>
        <Link href="/" className="mt-8 inline-flex text-sm text-accent underline-offset-4 hover:underline">
          ← Home
        </Link>
      </Container>
    </PageShell>
  );
}
