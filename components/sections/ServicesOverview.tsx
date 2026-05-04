"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Smartphone, Cpu } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance web applications built with industry-leading frameworks and cloud-native architectures.",
    icon: <Layout className="w-8 h-8 text-primary" />,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions that provide a seamless experience on both iOS and Android.",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
  },
  {
    title: "UI/UX Design",
    description: "User-centric design that combines aesthetics with functionality to create intuitive digital experiences.",
    icon: <Code2 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions designed to solve specific business challenges and optimize operations.",
    icon: <Cpu className="w-8 h-8 text-primary" />,
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight mb-6">
            Technical solutions for <br /> modern challenges
          </h2>
          <p className="text-text-secondary leading-relaxed">
            We provide a comprehensive suite of digital services designed to help 
            businesses thrive in a rapidly evolving technological landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="mb-6 p-3 bg-background rounded-xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-text-primary">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
