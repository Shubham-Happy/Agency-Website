import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { Section } from "@/components/section";
import { Section2 } from "@/components/section-2";
import { Testimonials } from "@/components/testimonials";
import { Section3 } from "@/components/section-3";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Section />
      <Section2 />
      <Testimonials />
      <Section3 />
      <CtaSection />
      <Footer />
    </>
  );
}
