import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
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
      <VideoSection />
      <Features />
      <InTheBox />
      <Specs />
      <Accessories />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}
