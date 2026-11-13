"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/constants/projects";
import { ArrowRight } from "lucide-react";

const ProjectsPreview = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-border text-xs font-bold tracking-widest text-primary uppercase mb-4">
              Verified Case Studies
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary tracking-tight">
              Selected client work
            </h2>
            <p className="text-text-secondary mt-4 leading-relaxed text-base">
              A curated look at digital platforms and commerce systems we have
              engineered and scaled. Real clients, verified outcomes, and zero
              technical shortcuts.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold transition-colors text-sm shrink-0"
          >
            Explore All Case Studies <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
