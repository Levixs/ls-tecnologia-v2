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
      "min-h-screen w-full bg-black",
      "bg-grid-white/[0.04]",
      "relative overflow-hidden"
    )}>

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
