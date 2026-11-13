"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, ShoppingBag, Sliders, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "../ui/SpotlightCard";

const services = [
  {
    icon: <Globe className="w-6 h-6 text-primary group-hover:text-white transition-colors" />,
    title: "Web Platforms & Portals",
    description:
      "Modern, responsive web applications designed for fast load times, excellent search visibility, and seamless user experience.",
    solves:
      "Eliminates slow load speeds, poor mobile compatibility, and fragile outdated website templates.",
    deliverables: [
      "Custom Next.js & React Applications",
      "Mobile-First Responsive Layouts",
      "SEO & Google Search Console Setup",
      "Fast & Secure Cloud Hosting",
    ],
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-primary group-hover:text-white transition-colors" />,
    title: "E-Commerce & Paystack Solutions",
    description:
      "Custom digital commerce platforms that make selling, bidding, and purchasing effortless for your customers.",
    solves:
      "Stops high checkout abandonment, clunky payment flows, and manual order reconciliation headaches.",
    deliverables: [
      "Seamless Paystack Gateway Integration",
      "Product Catalog & Bundle Pricing",
      "Real-Time Timeframe Bidding Features",
      "Automated WhatsApp & Email Receipts",
    ],
  },
  {
    icon: <Sliders className="w-6 h-6 text-primary group-hover:text-white transition-colors" />,
    title: "Administrative Back-Offices",
    description:
      "Intuitive, password-protected management dashboards that give your team complete control over content, products, and sales.",
    solves:
      "Removes the need to contact a developer just to update a price, add a product, or review order status.",
    deliverables: [
      "Product, Inventory & Pricing Management",
      "Order, Transaction & Sales Tracking",
      "Role-Based Access for Staff Members",
      "Customer Activity & Analytics Overviews",
    ],
  },
  {
    icon: <Palette className="w-6 h-6 text-primary group-hover:text-white transition-colors" />,
    title: "Brand Identity & UI/UX Design",
    description:
      "Clean, modern visual systems and professional brand identities that position your business as an industry leader.",
    solves:
      "Fixes inconsistent visuals, confusing navigation, and amateur branding that weakens customer trust.",
    deliverables: [
      "Logo Redesign & Complete Brand Identity",
      "Executive Color Palettes & Typography",
      "Intuitive Customer Journey Wireframes",
      "Marketing Collateral & Proposal Formats",
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-border text-xs font-bold tracking-widest text-primary uppercase mb-4 shadow-2xs"
            >
              Core Capabilities
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-extrabold text-primary tracking-tight"
            >
              Digital solutions designed for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-accent-subtle">
                real business growth
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-text-secondary mt-4 leading-relaxed text-base"
            >
              We do not just write code; we deliver end-to-end digital solutions
              with clean user experiences, robust administration tools, and
              dedicated support.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors text-sm shrink-0"
            >
              <span>Explore All Detailed Services</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1.5 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
              className="h-full"
            >
              <SpotlightCard className="p-7 h-full flex flex-col justify-between group">
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-12 h-12 rounded-xl bg-slate-50 border border-border flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all shadow-2xs"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-lg font-heading font-bold text-primary mb-2.5 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="pt-3.5 border-t border-border mb-5">
                    <div className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">
                      What This Solves:
                    </div>
                    <p className="text-text-muted text-[11px] leading-relaxed">
                      {service.solves}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="space-y-1.5 mb-6">
                    {service.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[11px] text-text-secondary group-hover:text-text-primary transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover:scale-125 transition-transform" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <motion.div
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-colors cursor-pointer"
                    >
                      Discuss This Solution <ArrowRight size={14} />
                    </motion.div>
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
