import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Client Strip */}
      <section className="py-12 border-y border-border bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-text-secondary text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/clients/quickbasket_logo.png" alt="QuickBasket" className="h-8 md:h-10 object-contain" />
            <img src="/clients/c9x_logo.png" alt="C9X" className="h-8 md:h-10 object-contain" />
            <img src="/clients/qompas_logo.png" alt="Qompas" className="h-8 md:h-10 object-contain" />
            <img src="/clients/skillahead_logo.png" alt="Skillahead" className="h-8 md:h-10 object-contain" />
            <img src="/clients/rokswood_logo.png" alt="Rokswood" className="h-8 md:h-10 object-contain" />
          </div>
        </div>
      </section>

      <ProjectsPreview />

      <ServicesOverview />

      {/* About Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-surface border border-border overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-primary/20 blur-[100px]" />
                <div className="relative p-12 h-full flex flex-col justify-center">
                  <div className="text-6xl font-heading font-black text-text-primary mb-2">100+</div>
                  <div className="text-text-secondary font-bold uppercase tracking-widest text-xs">Projects Delivered</div>
                  <div className="mt-12 text-6xl font-heading font-black text-text-primary mb-2">15+</div>
                  <div className="text-text-secondary font-bold uppercase tracking-widest text-xs">Elite Engineers</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl flex items-center justify-center shadow-2xl">
                <Logo showText={false} className="scale-[2] text-white" />
              </div>
            </div>
            
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight mb-8">
                Driven by technical excellence and precision
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                LogicGuild was founded on the principle that software should be both powerful and 
                elegant. We don't just write code; we architect solutions that scale with 
                your business and provide a competitive edge in the digital economy.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-text-primary hover:text-primary font-bold transition-colors"
              >
                Learn More About Us <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight mb-8">
            Ready to build something <br /> extraordinary?
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-medium">
            Join the ranks of innovative companies that have scaled their digital 
            products with LogicGuild. Let's start your journey today.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-white/90 px-10 py-5 rounded-full font-black transition-all inline-block shadow-2xl"
          >
            Start a Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
