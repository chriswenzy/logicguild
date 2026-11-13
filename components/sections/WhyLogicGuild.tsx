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

const differentiators = [
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    title: "Senior Engineering Rigor",
    description:
      "We never cut corners or outsource critical platforms to inexperienced contractors. Every website and system is engineered with modern, robust standards.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary-light" />,
    title: "Clean, Executive Design",
    description:
      "Aesthetics and clarity go hand-in-hand. We design digital experiences that make your brand look premium, build trust immediately, and simplify purchasing.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: "Clear, Friendly Communication",
    description:
      "You speak directly with the team delivering your project. We speak plain English, explain options simply, and keep you informed every step of the way.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary-light" />,
    title: "Predictable Milestone Schedules",
    description:
      "We treat deadlines with discipline. We break projects into clear delivery milestones with transparent staging demos and zero surprise costs.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-primary" />,
    title: "True Business Partnership",
    description:
      "We take pride in understanding your business model. We are empathetic problem-solvers who care about your commercial success and long-term reputation.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-primary-light" />,
    title: "6 Months Included Technical Support",
    description:
      "Launch day is the start of our relationship. We include complimentary post-launch support covering bug fixes, minor updates, and technical guidance.",
  },
];

const WhyLogicGuild = () => {
  return (
    <section className="py-24 bg-surface border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold tracking-widest text-primary uppercase mb-4 shadow-xs">
            The LogicGuild Standard
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary tracking-tight">
            Why growing companies choose LogicGuild
          </h2>
          <p className="text-text-secondary mt-4 leading-relaxed text-base">
            We deliver the technical depth of an enterprise engineering firm
            with the agility, personal care, and friendly responsiveness of a
            dedicated partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-border hover:border-primary/40 transition-all duration-200 group hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-border flex items-center justify-center mb-6 group-hover:border-primary/30 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mb-2.5">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLogicGuild;
