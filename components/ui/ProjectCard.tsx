"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/constants/projects";

const ProjectCard: React.FC<Project> = ({
  title,
  client,
  category,
  description,
  outcome,
  image,
  tags,
  link,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md h-full"
    >
      <div>
        {/* Project Thumbnail Image */}
        <div className="aspect-[16/10] overflow-hidden relative bg-slate-100 border-b border-border">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
          />

          {/* Client badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/95 border border-border text-[11px] font-bold text-primary shadow-xs">
              {client}
            </span>
          </div>
        </div>

        <div className="p-7">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">
              {category}
            </span>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title}`}
              className="w-8 h-8 rounded-lg bg-slate-50 border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-colors"
            >
              <ArrowUpRight size={16} />
            </a>
          </div>

          <h3 className="text-xl font-heading font-bold mb-3 text-primary group-hover:text-primary-light transition-colors">
            {title}
          </h3>

          <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>

          {outcome && (
            <div className="p-3 rounded-xl bg-slate-50 border border-border text-xs mb-5">
              <span className="font-bold text-primary">Outcome: </span>
              <span className="text-text-secondary">{outcome}</span>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium text-text-secondary bg-slate-50 px-2.5 py-1 rounded-md border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-7 pt-0">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-light transition-colors"
        >
          View Live Platform <span className="ml-1.5">→</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
