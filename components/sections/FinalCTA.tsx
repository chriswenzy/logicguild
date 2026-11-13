"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ShieldCheck, Clock } from "lucide-react";

export default function FinalCTA() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0)}
          className="max-w-4xl mx-auto rounded-3xl bg-primary text-white p-10 md:p-16 text-center shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle cursor spotlight on navy card */}
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
            style={{
              opacity,
              background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.2), transparent 75%)`,
            }}
          />

          {/* Top subtle highlight line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-subtle via-accent to-accent-subtle" />

          {/* Background Ambient Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-white uppercase mb-6 backdrop-blur-xs cursor-default"
            >
              Start A Conversation
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
              Let&apos;s build something great.
            </h2>

            <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Our commitment goes beyond delivering software. We provide your
              business with dependable, professional digital platforms backed by
              complimentary services and six months of dedicated post-launch support.
            </p>

            <div className="flex flex-wrap justify-center gap-4 items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="group/btn relative overflow-hidden bg-white text-primary px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-3 text-sm cursor-pointer"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-slate-200 to-transparent transition-transform ease-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project Consultation
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1.5 transition-transform text-primary"
                    />
                  </span>
                </motion.button>
              </Link>

              <Link href="/projects">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="px-8 py-4 rounded-xl border border-white/30 bg-white/5 text-white font-semibold transition-all text-sm cursor-pointer"
                >
                  Review Case Studies
                </motion.button>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap justify-center gap-8 text-xs text-slate-300">
              <motion.span
                whileHover={{ scale: 1.05, color: "#FFFFFF" }}
                className="flex items-center gap-1.5 cursor-default transition-colors"
              >
                <Clock size={15} className="text-white" />
                Direct reply within 24 hours
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, color: "#FFFFFF" }}
                className="flex items-center gap-1.5 cursor-default transition-colors"
              >
                <ShieldCheck size={15} className="text-white" />
                6 Months Free Technical Support Included
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05, color: "#FFFFFF" }}
                className="flex items-center gap-1.5 cursor-default transition-colors"
              >
                <MessageSquare size={15} className="text-white" />
                Direct call with senior engineers
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
