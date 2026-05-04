"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border glass-hover"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-primary transition-colors"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
        
        <h3 className="text-xl font-heading font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-bold text-text-primary group-hover:translate-x-1 transition-transform"
        >
          View Project <span className="ml-2">→</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
