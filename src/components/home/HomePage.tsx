import { SiteHeader } from "@/components/layout/SiteHeader";
import { ExperienceShowcase } from "./ExperienceShowcase";
import { Footer } from "./Footer";
import { Hero } from "./Hero";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <Hero />
        <ExperienceShowcase />
      </main>
      <Footer />
    </>
  );
}
