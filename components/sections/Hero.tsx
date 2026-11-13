"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Globe,
  ShoppingBag,
  Sliders,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-24 overflow-hidden bg-background">
      {/* Dynamic Ambient Background Accents */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.5, 0.35],
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-24 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.3, 0.45, 0.3],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-accent-subtle/10 via-primary/5 to-transparent rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Entity Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-8">
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-border text-xs font-semibold text-text-secondary shadow-xs hover:border-accent/40 hover:bg-slate-100 transition-all cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="uppercase tracking-widest text-[11px] font-bold text-primary">
                LOGIC GUILD LIMITED · RC 8969485
              </span>
            </motion.div>
          </motion.div>

          {/* Authoritative High-Contrast Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold text-primary leading-[1.12] tracking-tight mb-8"
          >
            Engineering Better{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-light">
              Digital Platforms.
            </span>{" "}
            Delivering Technology That Moves Businesses Forward.
          </motion.h1>

          {/* Direct, Grounded Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            We design, build, and support modern web platforms, e-commerce
            systems, and custom administrative portals. Partner with an
            experienced engineering team committed to clean execution,
            transparent communication, and dedicated post-launch support.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 items-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  boxShadow: "0 12px 25px -5px rgba(15, 39, 68, 0.25)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group relative overflow-hidden bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center gap-3 shadow-md text-sm cursor-pointer"
              >
                {/* Shimmer sweep on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1.5 transition-transform duration-200"
                  />
                </span>
              </motion.button>
            </Link>

            <Link href="/projects">
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  backgroundColor: "#F8FAFC",
                  borderColor: "#CBD5E1",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-8 py-4 rounded-xl border border-border bg-white text-text-primary font-semibold transition-all shadow-xs text-sm cursor-pointer hover:shadow-sm"
              >
                Explore Our Work
              </motion.button>
            </Link>
          </motion.div>

          {/* Clean Interactive Capability Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-14 pt-8 border-t border-border flex flex-wrap justify-center items-center gap-x-8 gap-y-4"
          >
            {[
              { icon: <Globe size={16} className="text-primary" />, label: "Web Platforms" },
              { icon: <ShoppingBag size={16} className="text-primary" />, label: "Digital Commerce & Paystack" },
              { icon: <Sliders size={16} className="text-primary" />, label: "Admin Back-Offices" },
              { icon: <ShieldCheck size={16} className="text-accent" />, label: "6 Months Complimentary Support" },
            ].map((cap, i) => (
              <motion.div
                key={cap.label}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex items-center gap-2 text-text-secondary text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-50/80 border border-transparent hover:border-border hover:bg-slate-100 transition-all cursor-default shadow-2xs"
              >
                {cap.icon}
                <span>{cap.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
