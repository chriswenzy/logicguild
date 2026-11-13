"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  ShoppingBag,
  Sliders,
  ShieldCheck,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[82vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Entity Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-border text-xs font-semibold text-text-secondary mb-8 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="uppercase tracking-widest text-[11px] font-bold">
                LOGIC GUILD LIMITED · RC 8969485
              </span>
            </div>

            {/* Authoritative High-Contrast Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold text-primary leading-[1.12] tracking-tight mb-8">
              Engineering Better{" "}
              <span className="text-primary-light">Digital Platforms.</span>{" "}
              Delivering Technology That Moves Businesses Forward.
            </h1>

            {/* Direct, Grounded Value Proposition */}
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              We design, build, and support modern web platforms, e-commerce
              systems, and custom administrative portals. Partner with an
              experienced engineering team committed to clean execution,
              transparent communication, and dedicated post-launch support.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4 items-center"
          >
            <Link
              href="/contact"
              className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 flex items-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              Start a Project
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-xl border border-border bg-white hover:bg-slate-50 text-text-primary font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-xs text-sm"
            >
              Explore Our Work
            </Link>
          </motion.div>

          {/* Clean Capability Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-14 pt-8 border-t border-border flex flex-wrap justify-center items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2 text-text-secondary text-xs font-semibold">
              <Globe size={16} className="text-primary" />
              <span>Web Platforms</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary text-xs font-semibold">
              <ShoppingBag size={16} className="text-primary" />
              <span>Digital Commerce &amp; Paystack</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary text-xs font-semibold">
              <Sliders size={16} className="text-primary" />
              <span>Admin Back-Offices</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary text-xs font-semibold">
              <ShieldCheck size={16} className="text-primary-light" />
              <span>6 Months Complimentary Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
