"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Layout, ShoppingBag, Sliders, Palette, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";

const serviceDetails = [
  {
    id: "web-ecommerce",
    title: "Web Platforms & E-Commerce Systems",
    description:
      "We design and develop fast, fully responsive web applications and e-commerce platforms tailored to your business needs, featuring seamless Paystack payments and smooth customer checkout journeys.",
    features: [
      "Custom Next.js & React Frontend",
      "Seamless Paystack Payment Gateway",
      "Timeframe Bidding & Outright Purchases",
      "Mobile-First Responsive Layouts",
    ],
    icon: <ShoppingBag className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />,
  },
  {
    id: "admin-portals",
    title: "Custom Administrative Back-Offices",
    description:
      "Every platform we build comes equipped with a clean, intuitive management back-office giving your administrators full control over products, orders, inventory, content, and user accounts.",
    features: [
      "Product, Pricing & Inventory Control",
      "Real-Time Order & Transaction Status",
      "Role-Based Administrator Accounts",
      "Sales Reports & Customer Activity",
    ],
    icon: <Sliders className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />,
  },
  {
    id: "brand-design",
    title: "Brand Identity & UI/UX Product Design",
    description:
      "We build clean, executive brand systems that elevate your company's digital presence—including professional logo redesign, executive color palettes, and intuitive user experiences.",
    features: [
      "Corporate Logo Redesign & Assets",
      "Executive Color Palettes & Fonts",
      "User Journey & Checkout Wireframing",
      "Marketing Collateral & Proposals",
    ],
    icon: <Palette className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />,
  },
  {
    id: "support-cloud",
    title: "Hosting, SEO & 6 Months Technical Support",
    description:
      "We provide comprehensive complimentary launch services, including high-speed cloud hosting, custom domain configuration, Google SEO setup, and six full months of post-launch technical assistance.",
    features: [
      "1 Year Complimentary Domain & Hosting",
      "Google Search Console & SEO Setup",
      "SSL Security Certificate Setup",
      "6 Months Free Technical Support",
    ],
    icon: <Layout className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 bg-background text-text-primary">
      <Navbar />

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
              Core Capabilities
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary tracking-tight mb-6">
              Engineering solutions designed for measurable business growth
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              We provide turnkey software engineering, digital commerce, and
              administrative platforms that simplify operations and deliver
              reliable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {serviceDetails.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SpotlightCard className="p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center group">
                  <div className="md:w-5/12">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="w-16 h-16 bg-slate-50 border border-border rounded-2xl flex items-center justify-center mb-6 shadow-xs group-hover:bg-primary group-hover:border-primary transition-all"
                    >
                      {service.icon}
                    </motion.div>
                    <h2 className="text-2xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {service.features.map((feature) => (
                      <motion.div
                        key={feature}
                        whileHover={{ scale: 1.03, x: 2 }}
                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-border hover:border-accent/30 hover:bg-white transition-all shadow-2xs"
                      >
                        <CheckCircle2 size={16} className="text-accent shrink-0" />
                        <span className="font-semibold text-text-primary text-xs">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-bold tracking-widest text-primary uppercase mb-3 shadow-xs">
              Our Process
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-primary mb-3">
              Clear, Predictable Delivery
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              Every project follows a disciplined schedule with verified staging
              reviews before live deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "We align on scope, deliverables, payment gateway requirements, and timeline.",
              },
              {
                step: "02",
                title: "Design & Architecture",
                desc: "We design responsive wireframes and establish secure database and API structures.",
              },
              {
                step: "03",
                title: "Development & Testing",
                desc: "We engineer client-facing pages, back-office admin portals, and test payments.",
              },
              {
                step: "04",
                title: "Launch & 6 Months Care",
                desc: "We deploy to live cloud servers, hand over full ownership, and provide ongoing support.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white border border-border shadow-xs hover:shadow-md hover:border-accent/40 transition-all cursor-default"
              >
                <div className="text-xl font-heading font-extrabold text-accent mb-2">
                  {item.step}
                </div>
                <h3 className="text-base font-heading font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-extrabold text-primary mb-4">
            Ready to discuss your project?
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto mb-8">
            Tell us about your requirements and we will prepare a clear,
            transparent proposal with fixed milestones.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md text-sm cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
