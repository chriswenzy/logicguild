"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-white border border-border shadow-lg flex items-center justify-center text-primary hover:text-accent transition-colors group cursor-pointer"
        >
          {/* Circular Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
            <circle
              cx="24"
              cy="24"
              r="18"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="2.5"
            />
            <circle
              cx="24"
              cy="24"
              r="18"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>
          <ArrowUp
            size={18}
            className="group-hover:-translate-y-0.5 transition-transform text-primary group-hover:text-accent"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
