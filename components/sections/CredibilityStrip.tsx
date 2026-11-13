"use client";

import React from "react";

const CredibilityStrip = () => {
  return (
    <section className="py-16 border-y border-border bg-surface">
      <div className="container mx-auto px-6">
        {/* Metric Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-border">
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight">
              100<span className="text-primary-light">+</span>
            </div>
            <div className="text-text-secondary text-xs uppercase tracking-wider font-semibold mt-1">
              Digital Platforms Delivered
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight">
              15<span className="text-primary-light">+</span>
            </div>
            <div className="text-text-secondary text-xs uppercase tracking-wider font-semibold mt-1">
              Senior Engineers &amp; Designers
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight">
              6 Months
            </div>
            <div className="text-text-secondary text-xs uppercase tracking-wider font-semibold mt-1">
              Complimentary Post-Launch Care
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight">
              100<span className="text-primary-light">%</span>
            </div>
            <div className="text-text-secondary text-xs uppercase tracking-wider font-semibold mt-1">
              Milestone Accountability
            </div>
          </div>
        </div>

        {/* Client Logos Strip */}
        <div className="pt-10">
          <p className="text-center text-text-muted text-[11px] uppercase tracking-[0.2em] font-bold mb-8">
            Trusted by growing businesses and established platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-75 hover:opacity-100 transition-opacity duration-300">
            <img
              src="/clients/quickbasket_logo.png"
              alt="QuickBasket"
              className="h-7 md:h-8 object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/clients/c9x_logo.png"
              alt="C9X"
              className="h-7 md:h-8 object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/clients/qompas_logo.png"
              alt="Qompas"
              className="h-7 md:h-8 object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/clients/skillahead_logo.png"
              alt="Skillahead"
              className="h-7 md:h-8 object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/clients/rokswood_logo.png"
              alt="Rokswood"
              className="h-7 md:h-8 object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
