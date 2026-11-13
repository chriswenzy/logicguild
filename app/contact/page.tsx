"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MessageSquare, Send, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "Web Platform & E-Commerce",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-32 bg-background text-text-primary">
      <Navbar />

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Value Prop & Channels */}
            <div className="lg:col-span-5">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
                Start A Conversation
              </span>
              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-primary tracking-tight mb-6">
                Have a project in mind? <br />
                <span className="text-primary-light">
                  Let&apos;s build something great.
                </span>
              </h1>
              <p className="text-text-secondary text-base leading-relaxed mb-8">
                Whether you are launching a new e-commerce website, building a
                custom administrative portal, or redesigning your brand, we are
                ready to provide clear, actionable guidance.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-border flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                      Direct Email
                    </div>
                    <a
                      href="mailto:logicguildltd@gmail.com"
                      className="text-sm font-bold text-primary hover:text-primary-light transition-colors"
                    >
                      logicguildltd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-border flex items-center justify-center text-primary shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                      WhatsApp &amp; Phone
                    </div>
                    <a
                      href="https://wa.me/2347067435384"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-primary hover:text-primary-light transition-colors"
                    >
                      +234 706 743 5384
                    </a>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-3 pt-6 border-t border-border text-xs text-text-secondary">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary-light shrink-0" />
                  <span>Prompt response within 24 business hours.</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-primary shrink-0" />
                  <span>6 Months complimentary post-launch technical support.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>LOGIC GUILD LIMITED · COMPANY REGISTRATION NO. 8969485</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Executive Proposal Form */}
            <div className="lg:col-span-7 bg-white border border-border p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 border border-border text-primary mx-auto flex items-center justify-center">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    Message Received
                  </h3>
                  <p className="text-text-secondary text-sm max-w-md mx-auto">
                    Thank you for reaching out to LOGIC GUILD LIMITED. Our team
                    will review your project requirements and reply within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-text-primary focus:bg-white focus:border-primary outline-none transition-colors text-sm"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-text-primary focus:bg-white focus:border-primary outline-none transition-colors text-sm"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                      Project Type
                    </label>
                    <select
                      className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-text-primary focus:bg-white focus:border-primary outline-none transition-colors appearance-none text-sm"
                      value={formState.project}
                      onChange={(e) =>
                        setFormState({ ...formState, project: e.target.value })
                      }
                    >
                      <option>Web Platform &amp; E-Commerce</option>
                      <option>Charity / Bidding Platform</option>
                      <option>Administrative Back-Office &amp; Dashboard</option>
                      <option>Brand Identity &amp; Logo Redesign</option>
                      <option>Custom Web Application</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                      Project Details &amp; Objectives
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Briefly describe what you'd like to build, your key requirements, and expected timeline..."
                      className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-text-primary focus:bg-white focus:border-primary outline-none transition-colors resize-none text-sm leading-relaxed"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md text-sm"
                  >
                    Send Project Inquiry <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
