"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your business model, customer requirements, and product goals to agree on clear scope, features, and realistic timelines.",
  },
  {
    step: "02",
    title: "Architecture & Specifications",
    desc: "We plan data structures, user flows, payment configurations (Paystack), and administrative features before writing a single line of code.",
  },
  {
    step: "03",
    title: "UI/UX Design & Branding",
    desc: "We create clean, modern visual designs and responsive wireframes that make your brand stand out and provide effortless navigation.",
  },
  {
    step: "04",
    title: "Development & Integration",
    desc: "We build the platform using high-performance technologies, connecting database records, payment systems, and administrative portals.",
  },
  {
    step: "05",
    title: "Testing & Quality Review",
    desc: "We test across real mobile devices, tablets, and desktop browsers, checking security, load speed, form validation, and checkout flows.",
  },
  {
    step: "06",
    title: "Launch & Training",
    desc: "We handle domain configuration, SSL security certificates, production deployment, and walk your team through the admin dashboard.",
  },
  {
    step: "07",
    title: "6 Months Technical Support",
    desc: "We remain by your side for six months post-launch to resolve any bugs, perform light adjustments, and ensure smooth operation.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-24 bg-surface border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold tracking-widest text-primary uppercase mb-4 shadow-xs">
            Delivery Discipline
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary tracking-tight">
            How we deliver your project
          </h2>
          <p className="text-text-secondary mt-4 leading-relaxed text-base">
            No confusion. No hidden surprises. Our structured 7-step process
            guarantees predictable milestones, thorough testing, and clear
            communication from consultation to launch and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-border flex flex-col justify-between hover:border-primary/40 transition-colors shadow-xs"
            >
              <div>
                <div className="font-heading text-2xl font-extrabold text-primary mb-3">
                  {item.step}
                </div>
                <h3 className="text-base font-heading font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Summary Card */}
          <div className="p-6 rounded-2xl bg-slate-100 border border-border flex flex-col justify-center">
            <div className="text-primary-light font-bold text-xs uppercase tracking-wider mb-2">
              Our Commitment
            </div>
            <div className="font-heading font-bold text-primary text-lg mb-2">
              Predictable, On-Time Delivery
            </div>
            <p className="text-text-secondary text-xs leading-relaxed">
              Every milestone is demonstrated and reviewed on live staging
              environments before final sign-off.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
