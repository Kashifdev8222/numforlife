import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "./AboutSection";
import { ExperienceShowcase } from "./ExperienceShowcase";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { TarotLiteSection } from "./TarotLiteSection";
import { TestimonialsSection } from "./TestimonialsSection";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <Hero />
        <ExperienceShowcase />
        <AboutSection />
        <TarotLiteSection />
        <TestimonialsSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
