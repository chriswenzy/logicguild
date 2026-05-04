"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Globe, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid-pattern">
      {/* Background Glows with parallax effect */}
      <motion.div 
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface border border-border text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Engineering Excellence
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-bold text-text-primary leading-[1.1] tracking-tighter mb-8">
              We build scalable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                digital products
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 leading-relaxed font-medium">
              LogicGuild is a elite team of developers and designers committed to building 
              high-performance software that drives growth and defines industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-6"
          >
            <Link
              href="/projects"
              className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-2xl shadow-primary/20"
            >
              View Our Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-border bg-surface hover:bg-card text-text-primary font-bold transition-all"
            >
              Start a Project
            </Link>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-24 pt-12 border-t border-border/50 flex flex-wrap gap-12"
          >
            <div className="flex items-center gap-3 text-text-secondary grayscale hover:grayscale-0 transition-all cursor-default">
              <Globe size={24} />
              <span className="text-xs font-bold tracking-widest uppercase">Web Systems</span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary grayscale hover:grayscale-0 transition-all cursor-default">
              <Smartphone size={24} />
              <span className="text-xs font-bold tracking-widest uppercase">Mobile Apps</span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary grayscale hover:grayscale-0 transition-all cursor-default">
              <Code size={24} />
              <span className="text-xs font-bold tracking-widest uppercase">Custom Dev</span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary grayscale hover:grayscale-0 transition-all cursor-default">
              <Database size={24} />
              <span className="text-xs font-bold tracking-widest uppercase">Cloud Architecture</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
