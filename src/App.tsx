import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { BenefitsSection } from "./components/sections/BenefitsSection";
import { FAQSection } from "./components/sections/FAQSection";
import { FinalCTASection } from "./components/sections/FinalCTASection";
import { HeroSection } from "./components/sections/HeroSection";
import { InvestmentSection } from "./components/sections/InvestmentSection";
import { ModelsSection } from "./components/sections/ModelsSection";
import { ProblemSection } from "./components/sections/ProblemSection";
import { ProductDetailSection } from "./components/sections/ProductDetailSection";
import { PurchaseProcessSection } from "./components/sections/PurchaseProcessSection";
import { ShowcaseSection } from "./components/sections/ShowcaseSection";
import { InstagramVideosSection } from "./components/sections/InstagramVideosSection";
import { SocialProofSection } from "./components/sections/SocialProofSection";
import { WaterFlowSection } from "./components/sections/WaterFlowSection";
import { useLenisSmoothScroll } from "./hooks/useLenisSmoothScroll";

export default function App() {
  useLenisSmoothScroll();

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-graphite"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <HeroSection />
        <ProblemSection />
        <WaterFlowSection />
        <ProductDetailSection />
        <BenefitsSection />
        <SocialProofSection />
        <InstagramVideosSection />
        <ModelsSection />
        <InvestmentSection />
        <ShowcaseSection />
        <PurchaseProcessSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
