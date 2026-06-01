import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import AdditionalServices from "@/components/AdditionalServices";
import About from "@/components/About";
import WhyNixon from "@/components/WhyNixon";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import PodcastSection from "@/components/PodcastSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Services />
        <AdditionalServices />
        <About />
        <WhyNixon />
        <Reviews />
        <Blog />
        <PodcastSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
