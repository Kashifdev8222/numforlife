import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function MembershipPage() {
  return (
    <PageShell>
      <Container className="max-w-3xl py-12 sm:py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">Membership</p>
        <h1 className="mt-4 font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl">
          会员页（演示）
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          展示 Free / Elite / VIP 权益概览。真实权益与支付由后端 / App Admin 控制。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/#membership">返回首页会员区</Button>
          <Button href="/#join" variant="secondary">
            打开 App
          </Button>
        </div>
      </Container>
    </PageShell>
  );
}
