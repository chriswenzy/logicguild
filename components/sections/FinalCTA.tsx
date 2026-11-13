"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, ShieldCheck, Clock } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-primary text-white p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
          {/* Subtle accent border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary-light" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-white uppercase mb-6">
            Start A Conversation
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
            Let&apos;s build something great.
          </h2>

          <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Our commitment goes beyond delivering software. We provide your
            business with dependable, professional digital platforms backed by
            complimentary services and six months of dedicated post-launch support.
          </p>

          <div className="flex flex-wrap justify-center gap-4 items-center">
            <Link
              href="/contact"
              className="group bg-white hover:bg-slate-100 text-primary px-8 py-4 rounded-xl font-bold transition-all duration-200 flex items-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              Start Your Project Consultation
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform text-primary"
              />
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-xl border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              Review Case Studies
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap justify-center gap-8 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <Clock size={15} className="text-white" />
              Direct reply within 24 hours
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-white" />
              6 Months Free Technical Support Included
            </span>
            <span className="flex items-center gap-1.5">
              <MessageSquare size={15} className="text-white" />
              Direct call with senior engineers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
