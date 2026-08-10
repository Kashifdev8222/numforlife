import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutTeaser } from "./AboutTeaser";
import { AppDownload } from "./AppDownload";
import { Ecosystem } from "./Ecosystem";
import { FaqPreview } from "./FaqPreview";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import { Guidance } from "./Guidance";
import { Hero } from "./Hero";
import { MembershipPreview } from "./MembershipPreview";
import { Partners } from "./Partners";
import { ProductEntries } from "./ProductEntries";
import { SampleResult } from "./SampleResult";
import { TarotLiteBanner } from "./TarotLiteBanner";
import { Testimonials } from "./Testimonials";
import { WhyShuyi } from "./WhyShuyi";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <Hero />
        <AppDownload />
        <AboutTeaser />
        <Ecosystem />
        <ProductEntries />
        <TarotLiteBanner />
        <SampleResult />
        <Guidance />
        <MembershipPreview />
        <WhyShuyi />
        <Partners />
        <Testimonials />
        <FaqPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
