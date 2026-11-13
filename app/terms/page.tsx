import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service | LOGIC GUILD LIMITED",
  description: "Terms and conditions for services provided by LOGIC GUILD LIMITED (RC 8969485).",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 bg-background text-text-primary">
      <Navbar />

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
            Legal &amp; Governance
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary tracking-tight mb-8">
            Terms of Service
          </h1>

          <div className="space-y-10 text-text-secondary leading-relaxed text-sm md:text-base">
            <section className="p-6 rounded-2xl bg-white border border-border shadow-xs">
              <h2 className="text-lg font-heading font-bold text-primary mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing services or entering into an agreement with LOGIC GUILD LIMITED (Company Registration No. 8969485), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-border shadow-xs">
              <h2 className="text-lg font-heading font-bold text-primary mb-3">2. Scope of Services</h2>
              <p>
                LOGIC GUILD LIMITED provides web design, software development, e-commerce systems, administrative back-offices, and post-launch technical support. Specific project deliverables, payment milestones, and delivery timelines are specified in our official proposals and service quotations.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-border shadow-xs">
              <h2 className="text-lg font-heading font-bold text-primary mb-3">3. Source Code &amp; Intellectual Property Ownership</h2>
              <p>
                Full source code and project intellectual property rights are transferred to the client upon full payment of the project investment. LOGIC GUILD LIMITED retains the right to display the completed work in its professional portfolio for promotional purposes unless otherwise protected under a formal non-disclosure agreement.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-border shadow-xs">
              <h2 className="text-lg font-heading font-bold text-primary mb-3">4. Post-Launch Technical Support</h2>
              <p>
                Where included, complimentary technical support covers bug fixes, error resolution, minor adjustments, and technical troubleshooting for the agreed duration. Support excludes major redesigns, new feature modules, and significant functionality additions, which are quoted separately.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-border shadow-xs">
              <h2 className="text-lg font-heading font-bold text-primary mb-3">5. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
              </p>
            </section>

            <p className="text-xs text-text-muted pt-6 border-t border-border">
              LOGIC GUILD LIMITED · COMPANY REGISTRATION NO. 8969485 · Last Updated: November 2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
