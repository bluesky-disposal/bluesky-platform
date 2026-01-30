import { Header } from "@/components/header";
import { Hero } from "@/components/home/hero";
import WhyBlue from "@/components/home/why-blue";
import DumpsterSize from "@/components/home/dumpster-size";
import HowItWorks from "@/components/home/how-it-works";
import CalculateSize from "@/components/home/calculate-size";
import FAQSection from "@/components/home/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <WhyBlue />
      <DumpsterSize />
      <CalculateSize />
      <HowItWorks />
      <FAQSection />
      <Footer />
    </main>
  );
}
