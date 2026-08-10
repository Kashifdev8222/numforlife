import { SiteHeader } from "@/components/layout/SiteHeader";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { PathShowcase } from "./PathShowcase";
import { TarotExperience } from "./TarotExperience";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <Hero />
        <TarotExperience />
        <PathShowcase />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
