import React from "react";
import Link from "next/link";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-6 block">
              <Logo />
            </Link>
            <p className="text-text-secondary max-w-sm mb-8 leading-relaxed">
              We build scalable digital products with precision and technical excellence. 
              Partner with us to transform your vision into reality.
            </p>
          </div>
          
          <div>
            <h4 className="text-text-primary font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-text-secondary hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/projects" className="text-text-secondary hover:text-primary transition-colors text-sm">Our Work</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-bold mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="mailto:logicguildltd@gmail.com" className="text-text-secondary hover:text-primary transition-colors text-sm">logicguildltd@gmail.com</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">Twitter / X</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-text-secondary text-xs">
          <p>© {new Date().getFullYear()} LogicGuild. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
