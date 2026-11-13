"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/constants/projects";
import { ArrowRight } from "lucide-react";

export default function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-24 bg-background border-t border-border relative overflow-hidden">
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
              Verified Case Studies
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-extrabold text-primary tracking-tight"
            >
              Selected client work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-text-secondary mt-4 leading-relaxed text-base"
            >
              A curated look at digital platforms and commerce systems we have
              engineered and scaled. Real clients, verified outcomes, and zero
              technical shortcuts.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors text-sm shrink-0"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1.5 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-40px" }}
              className="h-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
