"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  PanInfo,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Layers,
  LayoutGrid,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ShowcaseCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  variant: "web" | "mobile" | "portal" | "design";
}

const cards: ShowcaseCard[] = [
  {
    id: "web",
    tag: "01 / WEB PLATFORMS",
    title: "High-Speed Web Applications",
    subtitle: "Responsive interfaces engineered for clarity, speed, and scale.",
    icon: LayoutGrid,
    variant: "web",
  },
  {
    id: "mobile",
    tag: "02 / MOBILE EXPERIENCES",
    title: "Fluid iOS & Android Apps",
    subtitle: "Gesture-driven mobile products with native-grade responsiveness.",
    icon: Smartphone,
    variant: "mobile",
  },
  {
    id: "portal",
    tag: "03 / CUSTOM SOFTWARE",
    title: "Tailored Admin & Ops Portals",
    subtitle: "Clean internal tools built around how your team actually works.",
    icon: Code2,
    variant: "portal",
  },
  {
    id: "design",
    tag: "04 / PRODUCT DESIGN",
    title: "Interactive UI Systems",
    subtitle: "Motion-rich design systems with 6 months post-launch support.",
    icon: Layers,
    variant: "design",
  },
];

function CardWireframe({ variant }: { variant: ShowcaseCard["variant"] }) {
  if (variant === "web") {
    return (
      <div className="rounded-2xl bg-surface border border-border p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary/25" />
            <span className="w-2 h-2 rounded-full bg-primary/45" />
            <span className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <span className="h-2 w-20 rounded-full bg-primary/15" />
        </div>
        <div className="grid grid-cols-3 gap-2.5 pt-1">
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="col-span-2 h-20 rounded-xl bg-primary/10 border border-primary/15 p-3 flex flex-col justify-between"
          >
            <span className="h-2 w-16 rounded-full bg-primary/40" />
            <span className="h-2 w-24 rounded-full bg-primary/20" />
          </motion.div>
          <div className="h-20 rounded-xl bg-white border border-border p-2.5 flex flex-col justify-end gap-1.5">
            <span className="h-6 w-full rounded-md bg-primary/15" />
            <span className="h-2 w-3/4 rounded-full bg-primary/25" />
          </div>
        </div>
        <div className="flex gap-2">
          <span className="h-2.5 flex-1 rounded-full bg-primary/15" />
          <span className="h-2.5 w-14 rounded-full bg-primary" />
        </div>
      </div>
    );
  }

  if (variant === "mobile") {
    return (
      <div className="rounded-2xl bg-surface border border-border p-4 flex items-center justify-center gap-4">
        <div className="w-28 h-32 rounded-2xl bg-white border-2 border-primary/20 p-2.5 flex flex-col justify-between shadow-xs">
          <div className="w-8 h-1 rounded-full bg-primary/20 mx-auto" />
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 rounded-xl bg-primary text-white flex items-center justify-center text-[10px] font-bold"
          >
            Tap &amp; Swipe
          </motion.div>
          <div className="grid grid-cols-3 gap-1">
            <span className="h-2 rounded-full bg-primary/20" />
            <span className="h-2 rounded-full bg-primary/40" />
            <span className="h-2 rounded-full bg-primary/20" />
          </div>
        </div>
        <div className="flex-1 space-y-2.5">
          <span className="block h-2.5 w-full rounded-full bg-primary/20" />
          <span className="block h-2.5 w-4/5 rounded-full bg-primary/15" />
          <span className="block h-7 w-24 rounded-lg bg-primary/10 border border-primary/15" />
        </div>
      </div>
    );
  }

  if (variant === "portal") {
    return (
      <div className="rounded-2xl bg-surface border border-border p-4 space-y-2.5">
        {[0, 1, 2].map((row) => (
          <motion.div
            key={row}
            animate={{ x: [0, 3, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: row * 0.35,
            }}
            className="flex items-center justify-between bg-white border border-border rounded-xl px-3 py-2"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="h-2 w-24 rounded-full bg-primary/25" />
            </div>
            <span className="h-2 w-10 rounded-full bg-primary/15" />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-surface border border-border p-4 flex items-center justify-between gap-3">
      <div className="space-y-2 flex-1">
        <span className="block h-2.5 w-20 rounded-full bg-primary/30" />
        <span className="block h-2 w-full rounded-full bg-primary/15" />
        <span className="block h-2 w-3/4 rounded-full bg-primary/15" />
      </div>
      <motion.div
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center shrink-0"
      >
        <div className="w-8 h-8 rounded-xl bg-primary" />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [deck, setDeck] = useState<ShowcaseCard[]>(cards);
  const [isPaused, setIsPaused] = useState(false);

  // Subtle cursor spotlight across hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 25 });
  const spotlight = useMotionTemplate`radial-gradient(650px circle at ${smoothX}px ${smoothY}px, rgba(15, 39, 68, 0.055), transparent 70%)`;

  const cycleNext = () => {
    setDeck((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const cyclePrev = () => {
    setDeck((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, prev.length - 1)];
    });
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(cycleNext, 4200);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (Math.abs(info.offset.x) > 70 || Math.abs(info.velocity.x) > 350) {
      if (info.offset.x < 0) {
        cycleNext();
      } else {
        cyclePrev();
      }
    }
  };

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      className="relative min-h-[90vh] flex items-center pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-background"
    >
      {/* Architectural Grid + Animated Light Beams */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="absolute inset-0 opacity-65"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15, 39, 68, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 39, 68, 0.045) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 45%, #000 35%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 45%, #000 35%, transparent 100%)",
          }}
        />
      </div>

      {/* Gliding Grid Beams */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
      >
        <motion.div
          animate={{ x: ["-25%", "125%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
          className="absolute top-[26%] left-0 h-px w-72 bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        />
        <motion.div
          animate={{ y: ["-25%", "125%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          className="absolute top-0 left-[54%] w-px h-64 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        />
      </div>

      {/* Interactive Cursor Spotlight */}
      <motion.div
        aria-hidden="true"
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 -z-10"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-6 text-left">
            <h1 className="text-4xl sm:text-5xl xl:text-[3.75rem] font-heading font-extrabold text-primary leading-[1.08] tracking-tight mb-6">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.65, ease: EASE, delay: 0.05 }}
                  className="block"
                >
                  Engineering Better
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.65, ease: EASE, delay: 0.14 }}
                  className="relative inline-block"
                >
                  Digital Platforms.
                  <motion.svg
                    viewBox="0 0 320 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -bottom-1 left-0 w-full h-3 pointer-events-none"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M2 8.5C92 2.5 228 2.5 318 8.5"
                      stroke="#0F2744"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeOpacity="0.22"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.85, ease: EASE, delay: 0.5 }}
                    />
                  </motion.svg>
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1 mt-1">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.65, ease: EASE, delay: 0.22 }}
                  className="block text-primary/80 text-3xl sm:text-4xl xl:text-[2.65rem] font-bold"
                >
                  Built to move businesses forward.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.34 }}
              className="text-base sm:text-lg text-text-secondary max-w-xl mb-8 leading-relaxed"
            >
              We design, build, and support modern web platforms, mobile
              experiences, and custom software—crafted with interactive
              precision and backed by 6 months of complimentary support.
            </motion.p>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.44 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    y: -2,
                    scale: 1.02,
                    boxShadow: "0 16px 30px -8px rgba(15, 39, 68, 0.3)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 450, damping: 24 }}
                  className="group relative overflow-hidden bg-primary text-white px-7 py-4 rounded-xl font-bold flex items-center gap-3 shadow-md text-sm cursor-pointer"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform ease-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Project
                    <ArrowRight
                      size={17}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </span>
                </motion.button>
              </Link>

              <Link href="/projects">
                <motion.button
                  whileHover={{
                    y: -2,
                    backgroundColor: "#F8FAFC",
                    borderColor: "#0F2744",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 450, damping: 24 }}
                  className="px-7 py-4 rounded-xl border border-border bg-white text-primary font-semibold transition-colors shadow-xs text-sm cursor-pointer"
                >
                  Explore Our Work
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Interactive Swipable 3D Card Deck */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.25 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="lg:col-span-6 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[460px] h-[360px] sm:h-[380px]">
              <AnimatePresence initial={false} mode="popLayout">
                {deck.map((card, index) => {
                  const isFront = index === 0;
                  const Icon = card.icon;

                  return (
                    <motion.div
                      key={card.id}
                      style={{
                        zIndex: deck.length - index,
                        originX: 0.5,
                        originY: 0.85,
                      }}
                      initial={{
                        scale: 0.9,
                        y: 36,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1 - index * 0.05,
                        y: index * 14,
                        rotate: index === 0 ? 0 : index % 2 === 1 ? 2.5 : -2.5,
                        opacity: index > 3 ? 0 : 1 - index * 0.14,
                      }}
                      exit={{
                        x: 240,
                        opacity: 0,
                        rotate: 10,
                        scale: 0.92,
                        transition: { duration: 0.25 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 24,
                      }}
                      drag={isFront ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.45}
                      onDragEnd={isFront ? handleDragEnd : undefined}
                      whileDrag={{ scale: 1.02, rotate: -2, cursor: "grabbing" }}
                      onClick={isFront ? cycleNext : undefined}
                      className={`absolute inset-x-0 top-0 rounded-3xl bg-white border border-border p-6 sm:p-7 shadow-[0_20px_50px_-15px_rgba(15,39,68,0.14)] select-none ${
                        isFront ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-mono font-bold tracking-wider text-text-muted">
                          {card.tag}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center shadow-xs">
                          <Icon size={17} />
                        </div>
                      </div>

                      <h3 className="text-xl font-heading font-extrabold text-primary mb-1.5">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-secondary mb-5 leading-relaxed">
                        {card.subtitle}
                      </p>

                      <CardWireframe variant={card.variant} />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Deck Controls */}
            <div className="mt-10 flex items-center gap-4">
              <motion.button
                type="button"
                aria-label="Previous card"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={cyclePrev}
                className="w-9 h-9 rounded-full border border-border bg-white hover:border-primary text-primary flex items-center justify-center shadow-xs cursor-pointer transition-colors"
              >
                <ArrowLeft size={15} />
              </motion.button>

              <span className="text-xs font-medium text-text-secondary flex items-center gap-2">
                <ShieldCheck size={14} className="text-primary" />
                Drag or click card to explore
              </span>

              <motion.button
                type="button"
                aria-label="Next card"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={cycleNext}
                className="w-9 h-9 rounded-full border border-border bg-white hover:border-primary text-primary flex items-center justify-center shadow-xs cursor-pointer transition-colors"
              >
                <ArrowRight size={15} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
