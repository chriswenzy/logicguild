import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Zap, HeartHandshake, Award } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "About Us | LOGIC GUILD LIMITED",
  description:
    "Learn about LOGIC GUILD LIMITED (RC 8969485), our senior engineering team, and our commitment to delivering dependable digital solutions.",
};

const stats = [
  { label: "Established", value: "2020" },
  { label: "Senior Engineers", value: "15+" },
  { label: "Platforms Delivered", value: "100+" },
  { label: "Client Satisfaction", value: "100%" },
];

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Engineering Rigor",
    desc: "We build for long-term reliability. We avoid brittle hacks and shortcuts, selecting resilient, proven, and secure architectures.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-primary-light" />,
    title: "Clear Transparency",
    desc: "We communicate plainly, early, and constructively. You have direct access to lead engineers with zero hidden agendas or technical jargon.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Disciplined Delivery",
    desc: "We take full accountability from initial scoping to live production, hitting agreed milestones on schedule with live staging previews.",
  },
  {
    icon: <Award className="w-6 h-6 text-primary-light" />,
    title: "Empathetic Partnership",
    desc: "Technology serves people. We listen carefully, respect your domain expertise, and make every step of development effortless to follow.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 bg-background text-text-primary">
      <Navbar />

      {/* Intro */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <Reveal direction="right">
              <div>
                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
                  About LogicGuild
                </span>
                <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-primary tracking-tight mb-6">
                  Exceptional engineering. <br />
                  <span className="text-primary-light">
                    Dependable partnership.
                  </span>
                </h1>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10">
                  LOGIC GUILD LIMITED (RC 8969485) is a premier digital engineering
                  and technology solutions partner. We combine senior systems
                  experience with the agility, clear communication, and personal care
                  of a dedicated product studio. We partner with growing businesses
                  and visionary founders to engineer digital platforms that build
                  trust and scale sustainably.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-l-3 border-primary pl-5 py-2 bg-slate-50 rounded-r-xl border border-border/50"
                    >
                      <div className="text-3xl font-heading font-extrabold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div className="aspect-square bg-white border border-border rounded-3xl relative overflow-hidden group shadow-lg flex flex-col items-center justify-center p-12 text-center">
                <Logo showText={false} size={90} />
                <div className="mt-8 font-heading font-bold text-2xl text-primary">
                  LOGIC<span className="text-primary-light">GUILD</span>
                </div>
                <p className="text-xs text-text-secondary mt-2 max-w-xs font-semibold tracking-wider uppercase">
                  LIMITED · RC 8969485
                </p>
                <div className="mt-4 px-3.5 py-1.5 rounded-full bg-slate-50 border border-border text-[11px] font-medium text-text-muted">
                  Professional Software Engineering
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal direction="up" delay={0.2}>
              <div className="p-10 md:p-12 rounded-3xl bg-white border border-border relative overflow-hidden h-full shadow-xs">
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  Our Mission
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-5">
                  Delivering technology that moves businesses forward
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                  To engineer dependable digital products that solve real business
                  challenges with clean architecture, high operational speed, and
                  uncompromising reliability—backed by transparent communication
                  and structured post-launch support.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="p-10 md:p-12 rounded-3xl bg-white border border-border relative overflow-hidden h-full shadow-xs">
                <div className="text-xs font-bold uppercase tracking-widest text-primary-light mb-4">
                  Our Vision
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-5">
                  The benchmark for reliable, approachable technical excellence
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                  To be Nigeria’s and Africa’s most trusted digital engineering
                  partner—empowering ambitious businesses to simplify operations,
                  expand online sales, and deliver world-class digital experiences
                  to their customers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-border text-xs font-bold tracking-widest text-primary uppercase mb-4">
              Foundational Values
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary tracking-tight">
              The principles that govern our delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl bg-white border border-border hover:border-primary/40 transition-all shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-border flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-3">
                  {v.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
