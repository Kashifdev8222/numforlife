import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { ImmersiveJourney } from "./ImmersiveJourney";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <Hero />
        <ImmersiveJourney />
      </main>
      <Footer />
    </>
  );
}
