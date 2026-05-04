"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/constants/projects";

const ProjectsPreview = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary tracking-tight">
              Selected Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-text-primary hover:text-primary font-bold transition-colors hidden md:block"
          >
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-block text-text-primary hover:text-primary font-bold transition-colors"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
