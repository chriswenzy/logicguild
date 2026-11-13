"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Zap, HeartHandshake, Award } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SpotlightCard from "@/components/ui/SpotlightCard";

const stats = [
  { label: "Established", value: 2020, suffix: "" },
  { label: "Senior Engineers", value: 15, suffix: "+" },
  { label: "Platforms Delivered", value: 100, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
];

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />,
    title: "Engineering Rigor",
    desc: "We build for long-term reliability. We avoid brittle hacks and shortcuts, selecting resilient, proven, and secure architectures.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />,
    title: "Clear Transparency",
    desc: "We communicate plainly, early, and constructively. You have direct access to lead engineers with zero hidden agendas or technical jargon.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />,
    title: "Disciplined Delivery",
    desc: "We take full accountability from initial scoping to live production, hitting agreed milestones on schedule with live staging previews.",
  },
  {
    icon: <Award className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />,
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-accent-subtle">
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
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className="border-l-3 border-accent pl-5 py-2.5 bg-slate-50 rounded-r-xl border border-border/50 hover:bg-slate-100 transition-colors shadow-2xs"
                    >
                      <div className="text-3xl font-heading font-extrabold text-primary mb-1">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="aspect-square bg-white border border-border rounded-3xl relative overflow-hidden group shadow-lg hover:shadow-2xl hover:border-accent/40 transition-all flex flex-col items-center justify-center p-12 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Logo showText={false} size={90} />
                </motion.div>
                <div className="mt-8 font-heading font-bold text-2xl text-primary">
                  LOGIC<span className="text-accent">GUILD</span>
                </div>
                <p className="text-xs text-text-secondary mt-2 max-w-xs font-semibold tracking-wider uppercase">
                  LIMITED · RC 8969485
                </p>
                <div className="mt-4 px-3.5 py-1.5 rounded-full bg-slate-50 border border-border text-[11px] font-medium text-text-muted">
                  Professional Software Engineering
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal direction="up" delay={0.2}>
              <SpotlightCard className="p-10 md:p-12 h-full shadow-xs group">
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  Our Mission
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-5 group-hover:text-accent transition-colors">
                  Delivering technology that moves businesses forward
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                  To engineer dependable digital products that solve real business
                  challenges with clean architecture, high operational speed, and
                  uncompromising reliability—backed by transparent communication
                  and structured post-launch support.
                </p>
              </SpotlightCard>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <SpotlightCard className="p-10 md:p-12 h-full shadow-xs group">
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  Our Vision
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-5 group-hover:text-accent transition-colors">
                  The benchmark for reliable, approachable technical excellence
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                  To be Nigeria’s and Africa’s most trusted digital engineering
                  partner—empowering ambitious businesses to simplify operations,
                  expand online sales, and deliver world-class digital experiences
                  to their customers.
                </p>
              </SpotlightCard>
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
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="h-full"
              >
                <SpotlightCard className="p-8 h-full flex flex-col justify-start group">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-12 h-12 rounded-xl bg-slate-50 border border-border flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all shadow-2xs"
                  >
                    {v.icon}
                  </motion.div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {v.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
