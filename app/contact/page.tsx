"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    alert("Message sent! Our team will reach out shortly.");
  };

  return (
    <main className="min-h-screen pt-32 bg-background">
      <Navbar />
      
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
                Contact Us
              </span>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-text-primary tracking-tighter mb-8">
                Let's build <br />
                <span className="text-primary">together</span>
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed mb-12">
                Have a project in mind? We'd love to hear from you. Fill out the 
                form or reach out directly via email or WhatsApp.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-1">Email</div>
                    <div className="text-xl font-bold text-text-primary">logicguildltd@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-1">WhatsApp</div>
                    <div className="text-xl font-bold text-text-primary">07067435384</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-background border border-border rounded-xl px-6 py-4 text-text-primary focus:border-primary outline-none transition-colors"
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-background border border-border rounded-xl px-6 py-4 text-text-primary focus:border-primary outline-none transition-colors"
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Project Type</label>
                  <select
                    className="w-full bg-background border border-border rounded-xl px-6 py-4 text-text-primary focus:border-primary outline-none transition-colors appearance-none"
                    onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                  >
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>UI/UX Design</option>
                    <option>Custom Software</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full bg-background border border-border rounded-xl px-6 py-4 text-text-primary focus:border-primary outline-none transition-colors resize-none"
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
