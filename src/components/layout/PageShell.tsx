import type { ReactNode } from "react";
import { SiteHeader, HEADER_HEIGHT } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/home/Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden" style={{ paddingTop: HEADER_HEIGHT }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
