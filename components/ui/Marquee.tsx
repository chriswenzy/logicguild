"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // seconds for one loop
  className?: string;
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  speed = 28,
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={`relative overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      <motion.div
        className={`flex shrink-0 items-center gap-12 md:gap-20 ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
