import React from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import BackToTop from "../ui/BackToTop";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-5 block">
              <Logo size={36} />
            </Link>
            <p className="text-text-secondary text-sm max-w-sm mb-4 leading-relaxed">
              LOGIC GUILD LIMITED is an engineering and digital product partner.
              We design, build, and support high-performing web platforms,
              e-commerce systems, and custom administrative software.
            </p>
            <div className="text-xs text-text-muted font-medium">
              RC NO. 8969485 · Professional Digital Engineering
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-text-primary font-heading font-bold text-sm mb-5">
              Capabilities
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-primary transition-colors text-xs"
                >
                  Web Systems &amp; Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-primary transition-colors text-xs"
                >
                  Mobile Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-primary transition-colors text-xs"
                >
                  Custom Enterprise Software
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-primary transition-colors text-xs"
                >
                  UI/UX Product Architecture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-heading font-bold text-sm mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-text-secondary hover:text-primary transition-colors text-xs"
                >
                  About LogicGuild
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-text-secondary hover:text-primary transition-colors text-xs"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-secondary hover:text-primary transition-colors text-xs"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-heading font-bold text-sm mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:logicguildltd@gmail.com"
                  className="text-text-secondary hover:text-primary transition-colors text-xs"
                >
                  logicguildltd@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors text-xs"
                >
                  X (formerly Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors text-xs"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors text-xs"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-center text-text-muted text-xs">
          <p>
            © {new Date().getFullYear()} LOGIC GUILD LIMITED. COMPANY REGISTRATION NO. 8969485. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
};

export default Footer;
