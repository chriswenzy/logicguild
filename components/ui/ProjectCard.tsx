"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      whileTap={{ scale: 0.985 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl h-full cursor-pointer"
    >
      {/* Subtle cursor spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(37, 99, 235, 0.07), transparent 75%)`,
        }}
      />

      <div>
        {/* Project Thumbnail Image with Smooth Zoom */}
        <div className="aspect-[16/10] overflow-hidden relative bg-slate-100 border-b border-border">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          />

          {/* Client badge */}
          <div className="absolute top-4 left-4 z-10">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 rounded-full bg-white/95 border border-border text-[11px] font-bold text-primary shadow-xs backdrop-blur-xs block"
            >
              {client}
            </motion.span>
          </div>
        </div>

        <div className="p-7 relative z-20">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              {category}
            </span>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title}`}
              className="w-8 h-8 rounded-lg bg-slate-50 border border-border flex items-center justify-center text-text-secondary group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all duration-200"
            >
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>

          <h3 className="text-xl font-heading font-bold mb-3 text-primary group-hover:text-accent transition-colors">
            {title}
          </h3>

          <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>

          {outcome && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-border text-xs mb-5 group-hover:border-accent/30 group-hover:bg-slate-50/90 transition-colors">
              <span className="font-bold text-primary">Outcome: </span>
              <span className="text-text-secondary">{outcome}</span>
            </div>
          )}

          {/* Tags with Hover Pop */}
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.08, y: -1 }}
                className="text-[10px] font-medium text-text-secondary bg-slate-50 px-2.5 py-1 rounded-md border border-border transition-colors hover:bg-slate-100"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-7 pt-0 relative z-20">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-bold text-primary hover:text-accent transition-colors group/link"
        >
          <span>View Live Platform</span>
          <span className="ml-1.5 group-hover/link:translate-x-1 transition-transform inline-block">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
