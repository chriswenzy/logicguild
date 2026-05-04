import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Code, Cpu, Globe, Layers, Shield, Zap } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "About | LogicGuild",
  description: "Learn more about LogicGuild, our mission, and our technical approach.",
};

const stats = [
  { label: "Founded", value: "2020" },
  { label: "Engineers", value: "15+" },
  { label: "Countries", value: "5" },
  { label: "Retention", value: "98%" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 bg-background">
      <Navbar />
      
      {/* Intro */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="right">
              <div>
                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
                  The Guild
                </span>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-text-primary tracking-tighter mb-8">
                  Building the future <br />
                  <span className="text-primary text-glow">one line at a time</span>
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed mb-12">
                  LogicGuild is more than a development agency. We are a collective of elite 
                  engineers, designers, and strategists who believe that technology is the 
                  most powerful tool for human progress. We partner with founders and 
                  enterprises to build products that are not just functional, but revolutionary.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="border-l border-border pl-6 py-2">
                      <div className="text-3xl font-heading font-black text-text-primary mb-1">{stat.value}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-text-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            
            <Reveal direction="left" delay={0.3}>
              <div className="aspect-square bg-surface border border-border rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-pattern opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[120px]" />
                <div className="relative h-full flex items-center justify-center">
                  <Logo showText={false} className="scale-[5] opacity-10" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal direction="up" delay={0.2}>
              <div className="p-12 rounded-3xl bg-card border border-border relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-8 text-primary/10">
                  <Globe size={120} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-text-primary mb-6">Our Mission</h3>
                <p className="text-text-secondary leading-relaxed">
                  To empower innovation by providing world-class engineering solutions that 
                  bridge the gap between complex problems and elegant digital experiences. 
                  We strive for perfection in every commit.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <div className="p-12 rounded-3xl bg-surface border border-border relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-8 text-secondary/10">
                  <Zap size={120} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-text-primary mb-6">Our Vision</h3>
                <p className="text-text-secondary leading-relaxed">
                  To become the global standard for technical excellence in product 
                  development, fostering a culture where engineering brilliance meets 
                  transformative business impact.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
