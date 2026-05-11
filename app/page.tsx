import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import Specs from "@/components/Specs";
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
      <Specs />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}
