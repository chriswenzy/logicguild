"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Selected Work", href: "/projects" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border py-3 shadow-xs"
          : "bg-white/80 backdrop-blur-xs py-4 border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" aria-label="LogicGuild Home">
          <Logo size={32} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href
                  ? "text-primary font-bold"
                  : "text-text-secondary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs hover:shadow-sm"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary focus:outline-none p-1.5 rounded-lg border border-border"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-border px-6 py-6 shadow-md"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary font-bold"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-primary hover:bg-primary-hover text-white py-3 rounded-lg text-sm font-bold transition-all"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
