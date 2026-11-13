"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MessageSquare, Send, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-border text-xs font-bold tracking-widest text-primary uppercase mb-4">
                Start A Conversation
              </div>
              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-primary tracking-tight mb-6">
                Have a project in mind? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-accent-subtle">
                  Let&apos;s build something great.
                </span>
              </h1>
              <p className="text-text-secondary text-base leading-relaxed mb-8">
                Whether you are launching a new e-commerce website, building a
                custom administrative portal, or redesigning your brand, we are
                ready to provide clear, actionable guidance.
              </p>

              <div className="space-y-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border shadow-xs hover:border-accent/40 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-border flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                      Direct Email
                    </div>
                    <a
                      href="mailto:logicguildltd@gmail.com"
                      className="text-sm font-bold text-primary hover:text-accent transition-colors"
                    >
                      logicguildltd@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border shadow-xs hover:border-accent/40 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-border flex items-center justify-center text-accent shrink-0">
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
                      className="text-sm font-bold text-primary hover:text-accent transition-colors"
                    >
                      +234 706 743 5384
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Guarantees */}
              <div className="space-y-3 pt-6 border-t border-border text-xs text-text-secondary">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-accent shrink-0" />
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
            </motion.div>

            {/* Right Column: Clean Executive Proposal Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-7 bg-white border border-border p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 border border-border text-accent mx-auto flex items-center justify-center">
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
                </motion.div>
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
                        className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-text-primary focus:bg-white focus:border-accent outline-none transition-all text-sm shadow-2xs"
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
                        className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-text-primary focus:bg-white focus:border-accent outline-none transition-all text-sm shadow-2xs"
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
                      className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-text-primary focus:bg-white focus:border-accent outline-none transition-all appearance-none text-sm shadow-2xs"
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
                      className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-text-primary focus:bg-white focus:border-accent outline-none transition-all resize-none text-sm leading-relaxed shadow-2xs"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full relative overflow-hidden bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm cursor-pointer"
                  >
                    <span>Send Project Inquiry</span>
                    <Send size={16} />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
