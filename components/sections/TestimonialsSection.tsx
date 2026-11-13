"use client";

import React from "react";
import { Quote } from "lucide-react";

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

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-surface border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold tracking-widest text-primary uppercase mb-4 shadow-xs">
            Client Verification
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary tracking-tight">
            What partners say about working with LogicGuild
          </h2>
          <p className="text-text-secondary mt-4 leading-relaxed text-base">
            Real feedback from business leaders and founders who rely on
            LogicGuild to power their primary web platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-border flex flex-col justify-between hover:border-primary/40 transition-colors shadow-xs hover:shadow-sm"
            >
              <div>
                <Quote size={28} className="text-primary/30 mb-4" />
                <p className="text-text-primary text-sm leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="font-heading font-bold text-primary text-sm">
                  {t.author}
                </div>
                <div className="text-xs text-primary-light font-semibold mt-0.5">
                  {t.company}
                </div>
                <div className="text-[11px] text-text-muted mt-0.5">
                  {t.sector}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
