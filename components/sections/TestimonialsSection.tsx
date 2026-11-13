"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SpotlightCard from "../ui/SpotlightCard";

const testimonials = [
  {
    quote:
      "LogicGuild delivered a high-throughput shopping platform that handled our peak flash-sale traffic without a single second of downtime. Their communication throughout the project was transparent, prompt, and friendly.",
    author: "Operations Lead",
    company: "QuickBasket",
    sector: "On-Demand E-Commerce",
  },
  {
    quote:
      "Working with LogicGuild on the C9X platform was effortless. They didn’t just write code; they understood our multi-vendor ecosystem and delivered a fast, intuitive marketplace that our users love.",
    author: "Head of Digital Operations",
    company: "C9X",
    sector: "Automotive Technology",
  },
  {
    quote:
      "The team at LogicGuild brought extraordinary discipline to our digital systems. They met every single milestone, documented every feature, and continue to provide reliable technical advice.",
    author: "Executive Leadership",
    company: "Rokswood",
    sector: "Real Estate & Energy",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border text-xs font-bold tracking-widest text-primary uppercase mb-4 shadow-2xs"
          >
            Client Verification
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-primary tracking-tight"
          >
            What partners say about working with LogicGuild
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-text-secondary mt-4 leading-relaxed text-base"
          >
            Real feedback from business leaders and founders who rely on
            LogicGuild to power their primary web platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-40px" }}
              className="h-full"
            >
              <SpotlightCard className="p-8 h-full flex flex-col justify-between group">
                <div>
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-5 text-accent group-hover:bg-accent group-hover:text-white transition-colors"
                  >
                    <Quote size={20} />
                  </motion.div>
                  <p className="text-text-primary text-sm leading-relaxed mb-6 font-normal italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="font-heading font-bold text-primary text-sm group-hover:text-accent transition-colors">
                    {t.author}
                  </div>
                  <div className="text-xs text-accent font-semibold mt-0.5">
                    {t.company}
                  </div>
                  <div className="text-[11px] text-text-muted mt-0.5">
                    {t.sector}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
