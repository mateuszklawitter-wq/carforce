import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ApplicationSection from "@/components/ApplicationSection";
import FeatureSections from "@/components/FeatureSections";
import InTheBox from "@/components/InTheBox";
import Specs from "@/components/Specs";
import Accessories from "@/components/Accessories";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <ApplicationSection />
      <FeatureSections />
      <InTheBox />
      <Specs />
      <Accessories />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}
