import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const services = [
  { title: "数字生命", href: "/cesuan" },
  { title: "姓名学", href: "/cesuan" },
  { title: "塔罗占卜", href: "/tarot" },
  { title: "东方占卜术", href: "/cesuan" },
];

export default function PortfolioPage() {
  return (
    <PageShell>
      <Container className="py-12 sm:py-16">
        <p className="text-sm text-accent">产品服务</p>
        <h1 className="mt-3 font-serif-cn text-3xl text-heading sm:text-4xl md:text-5xl">
          产品服务
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted">
          对应 live site portfolio：数字生命 / 姓名学 / 塔罗 / 东方占卜。完整流程下阶段接入。
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.title} className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow)]">
              <p className="text-xl text-heading">{s.title}</p>
              <a href={s.href} className="mt-3 inline-flex text-sm text-cta hover:underline">
                开始预览 →
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button href="/" variant="secondary">
            返回首页
          </Button>
        </div>
      </Container>
    </PageShell>
  );
}
