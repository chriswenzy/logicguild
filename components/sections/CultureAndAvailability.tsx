"use client";

import React from "react";
import { Clock, Shield, Sparkles, MessageSquareCode } from "lucide-react";

const CultureAndAvailability = () => {
  return (
    <section className="py-24 bg-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-border text-xs font-bold tracking-widest text-primary uppercase mb-4">
              Partnership &amp; Culture
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary tracking-tight mb-6">
              Experienced engineers who are genuinely approachable and easy to work with
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6 text-base">
              Great software is the result of clear, respectful, and transparent
              human collaboration. At LOGIC GUILD LIMITED, we listen carefully,
              respect your business goals, and explain technology decisions in
              plain, practical terms without unnecessary jargon.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8 text-base">
              We operate as a true extension of your business. No rigid
              bureaucracy, no defensive communication, and no disappearing acts.
              When you work with LogicGuild, you get dedicated partners who
              genuinely care about your project.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-border shadow-xs">
                <div className="font-heading font-bold text-primary text-base mb-1">
                  Rapid Response
                </div>
                <div className="text-xs text-text-secondary">
                  Prompt acknowledgements for active inquiries and project updates.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-border shadow-xs">
                <div className="font-heading font-bold text-primary text-base mb-1">
                  Weekly Live Demos
                </div>
                <div className="text-xs text-text-secondary">
                  Transparent progress reviews on live staging environments.
                </div>
              </div>
            </div>
          </div>

          {/* Right Architecture / Availability Card */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-surface border border-border relative overflow-hidden shadow-sm">
              <h3 className="text-xl font-heading font-bold text-primary mb-6">
                Our Client Commitment
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-border flex items-center justify-center shrink-0 text-primary">
                    <MessageSquareCode size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-1">
                      Direct, Jargon-Free Channels
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Communicate directly with the leads building your system
                      via WhatsApp, Email, or Google Meet. No complex ticketing
                      layers or gatekeepers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-border flex items-center justify-center shrink-0 text-primary-light">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-1">
                      Disciplined Turnaround
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Structured milestone timelines with clear start and end
                      dates, ensuring projects launch on schedule.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-border flex items-center justify-center shrink-0 text-primary">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary mb-1">
                      6 Months Complimentary Technical Support
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Every project includes six months of post-launch technical
                      assistance, bug fixes, and light adjustments to keep your
                      platform operating smoothly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-text-secondary">
                <span>Codebase Ownership:</span>
                <span className="font-bold text-primary">
                  100% Client-Owned Intellectual Property
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureAndAvailability;
