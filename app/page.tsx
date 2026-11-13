import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import WhyLogicGuild from "@/components/sections/WhyLogicGuild";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />

      {/* Hero: Centered, Authoritative, High-Contrast Executive Messaging */}
      <Hero />

      {/* Trust & Proof: Metric Counters and Grayscale Client Logos */}
      <CredibilityStrip />

      {/* Services: Core Capabilities (Web Platforms, Paystack Commerce, Admin Back-Offices, Brand Design) */}
      <ServicesOverview />

      {/* Selected Work: Verified Case Studies & Live Deployments */}
      <ProjectsPreview />

      {/* Why LogicGuild: Core Standards, Transparent Communication & 6 Months Support */}
      <WhyLogicGuild />

      {/* Client Feedback: Verified Testimonials */}
      <TestimonialsSection />

      {/* Final Call to Action */}
      <FinalCTA />

      <Footer />
    </main>
  );
}
