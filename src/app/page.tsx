import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SidebarShowcase } from "@/components/SidebarShowcase";
import { FeatureCards } from "@/components/FeatureCards";
import { DepthSections } from "@/components/DepthSections";
import { Footer } from "@/components/Footer";
import { ScrollToBottomButton } from "@/components/ScrollToBottomButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollToBottomButton />
      <main>
        <Hero />
        <SidebarShowcase />
        <FeatureCards />
        <DepthSections />
      </main>
      <Footer />
    </>
  );
}
