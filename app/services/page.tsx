import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Code, Database, Layout, Smartphone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services | LogicGuild",
  description: "Explore our range of professional software development and design services.",
};

const serviceDetails = [
  {
    id: "web",
    title: "Web Development",
    description: "We build scalable, high-performance web applications using industry-leading frameworks and cloud-native architectures.",
    features: ["Advanced Frontend Development", "Headless CMS Integration", "E-commerce Solutions", "API Design & Development"],
    icon: <Layout className="w-12 h-12" />,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description: "Custom iOS and Android apps that deliver native performance and seamless user experiences across all devices.",
    features: ["Cross-platform Development", "Native iOS Solutions", "Native Android Solutions", "App Store Optimization"],
    icon: <Smartphone className="w-12 h-12" />,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Product design that focuses on usability, accessibility, and visual excellence to drive user engagement.",
    features: ["User Research & Testing", "Interactive Prototyping", "Design Systems", "Brand Identity"],
    icon: <Code className="w-12 h-12" />,
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: "custom",
    title: "Custom Software",
    description: "Bespoke software solutions tailored to your unique business needs, from ERPs to complex data platforms.",
    features: ["Enterprise Systems (ERP/CRM)", "Database Architecture", "Cloud Infrastructure", "Legacy System Migration"],
    icon: <Database className="w-12 h-12" />,
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 bg-background">
      <Navbar />
      
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
              Capabilities
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-text-primary tracking-tighter mb-8">
              Expertise that <br />
              <span className="text-primary">drives innovation</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              We combine deep technical knowledge with product strategy to deliver 
              solutions that don't just work—they excel.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {serviceDetails.map((service, index) => (
              <div 
                key={service.id} 
                className={`group p-12 rounded-[2.5rem] bg-card border border-border overflow-hidden relative flex flex-col md:flex-row gap-12 items-center transition-all duration-500 hover:border-primary/50`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="md:w-1/3 relative z-10">
                  <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center text-primary mb-8 shadow-xl">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">{service.title}</h2>
                  <p className="text-text-secondary leading-relaxed">{service.description}</p>
                </div>
                
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-4 p-6 bg-background/50 rounded-2xl border border-border group-hover:bg-background transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-bold text-text-primary text-sm uppercase tracking-wider">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">Our Methodology</h2>
            <p className="text-text-secondary">A battle-tested approach to product delivery.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision, market, and technical constraints." },
              { step: "02", title: "Architecture", desc: "Designing robust systems that scale and perform under load." },
              { step: "03", title: "Engineering", desc: "Agile development with continuous integration and testing." },
              { step: "04", title: "Deployment", desc: "Launching with confidence and providing ongoing support." },
            ].map((item) => (
              <div key={item.step} className="relative p-8">
                <div className="text-6xl font-heading font-black text-white/5 absolute top-0 left-0 -translate-y-4">{item.step}</div>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-4 relative z-10">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-black transition-all shadow-2xl shadow-primary/20"
          >
            Ready to start? Let's talk <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
