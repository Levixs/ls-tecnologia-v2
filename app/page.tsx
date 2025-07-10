import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import { Process } from "@/components/Process";
import Services from "@/components/Services";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className={cn(
      "min-h-screen w-full relative",
      "bg-gradient-to-br from-gray-950 via-black to-gray-900",
      "overflow-hidden"
    )}>
      {/* Background Pattern Layer */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-20">
        <Header />
        <Hero />
        <Services />
        <Process />
        <Partners />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
