"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";
import Marquee from "../ui/Marquee";

const metrics = [
  {
    target: 100,
    suffix: "+",
    label: "Digital Platforms Delivered",
  },
  {
    target: 15,
    suffix: "+",
    label: "Senior Engineers & Designers",
  },
  {
    target: 6,
    suffix: " Months",
    label: "Complimentary Post-Launch Care",
  },
  {
    target: 100,
    suffix: "%",
    label: "Milestone Accountability",
  },
];

const clients = [
  { name: "QuickBasket", src: "/clients/quickbasket_logo.png" },
  { name: "C9X", src: "/clients/c9x_logo.png" },
  { name: "Qompas", src: "/clients/qompas_logo.png" },
  { name: "Skillahead", src: "/clients/skillahead_logo.png" },
  { name: "Rokswood", src: "/clients/rokswood_logo.png" },
];

export default function CredibilityStrip() {
  return (
    <section className="py-16 border-y border-border bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Animated Metric Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-border">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="text-center md:text-left p-3 rounded-xl hover:bg-white/60 transition-colors cursor-default"
            >
              <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight">
                <AnimatedCounter value={m.target} suffix={m.suffix} />
              </div>
              <div className="text-text-secondary text-xs uppercase tracking-wider font-semibold mt-1">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos with Infinite Smooth Marquee & Hover Pause */}
        <div className="pt-10">
          <p className="text-center text-text-muted text-[11px] uppercase tracking-[0.2em] font-bold mb-8">
            Trusted by growing businesses and established platforms
          </p>

          <Marquee speed={24} pauseOnHover={true} className="py-2">
            {clients.map((client) => (
              <motion.div
                key={client.name}
                whileHover={{ scale: 1.12, y: -2 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="flex items-center justify-center shrink-0 px-4 cursor-pointer"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="h-7 md:h-8 object-contain grayscale opacity-65 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
