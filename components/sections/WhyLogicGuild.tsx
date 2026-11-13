"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  HeartHandshake,
  Headphones,
} from "lucide-react";
import SpotlightCard from "../ui/SpotlightCard";

const differentiators = [
  {
    icon: <Code2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />,
    title: "Senior Engineering Rigor",
    description:
      "We never cut corners or outsource critical platforms to inexperienced contractors. Every website and system is engineered with modern, robust standards.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-accent group-hover:text-white transition-colors" />,
    title: "Clean, Executive Design",
    description:
      "Aesthetics and clarity go hand-in-hand. We design digital experiences that make your brand look premium, build trust immediately, and simplify purchasing.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-primary group-hover:text-white transition-colors" />,
    title: "Clear, Friendly Communication",
    description:
      "You speak directly with the team delivering your project. We speak plain English, explain options simply, and keep you informed every step of the way.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-accent group-hover:text-white transition-colors" />,
    title: "Predictable Milestone Schedules",
    description:
      "We treat deadlines with discipline. We break projects into clear delivery milestones with transparent staging demos and zero surprise costs.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-primary group-hover:text-white transition-colors" />,
    title: "True Business Partnership",
    description:
      "We take pride in understanding your business model. We are empathetic problem-solvers who care about your commercial success and long-term reputation.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-accent group-hover:text-white transition-colors" />,
    title: "6 Months Included Technical Support",
    description:
      "Launch day is the start of our relationship. We include complimentary post-launch support covering bug fixes, minor updates, and technical guidance.",
  },
];

export default function WhyLogicGuild() {
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
            The LogicGuild Standard
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-primary tracking-tight"
          >
            Why growing companies choose LogicGuild
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-text-secondary mt-4 leading-relaxed text-base"
          >
            We deliver the technical depth of an enterprise engineering firm
            with the agility, personal care, and friendly responsiveness of a
            dedicated partner.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-40px" }}
              className="h-full"
            >
              <SpotlightCard className="p-8 h-full flex flex-col justify-start group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-12 h-12 rounded-xl bg-slate-50 border border-border flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all shadow-2xs"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2.5 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
