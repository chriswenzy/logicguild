import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | LOGIC GUILD LIMITED",
  description: "Privacy policy and data protection practices at LOGIC GUILD LIMITED (RC 8969485).",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 bg-background text-text-primary">
      <Navbar />

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
            Legal &amp; Privacy
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary tracking-tight mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-10 text-text-secondary leading-relaxed text-sm md:text-base">
            <section className="p-6 rounded-2xl bg-white border border-border shadow-xs">
              <h2 className="text-lg font-heading font-bold text-primary mb-3">1. Information We Collect</h2>
              <p>
                LOGIC GUILD LIMITED (RC 8969485) collects information that you provide when submitting a project consultation form, communicating with our team, or contracting our services. This includes your name, email address, phone number, company name, and project specifications.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-border shadow-xs">
              <h2 className="text-lg font-heading font-bold text-primary mb-3">2. How We Use Information</h2>
              <p>
                We use this information exclusively to evaluate project requirements, prepare proposals, deliver contracted services, communicate project updates, and provide ongoing technical support. We never sell, rent, or monetize your contact or project data.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-border shadow-xs">
              <h2 className="text-lg font-heading font-bold text-primary mb-3">3. Confidentiality &amp; Client Data</h2>
              <p>
                All client proprietary information, customer data, and source materials shared during the course of an engagement are treated with strict confidentiality. Mutual non-disclosure agreements (NDAs) are gladly provided upon request.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-border shadow-xs">
              <h2 className="text-lg font-heading font-bold text-primary mb-3">4. Contacting Our Data Privacy Team</h2>
              <p>
                If you have questions regarding our data practices or wish to update or delete your information, please contact us at{" "}
                <a
                  href="mailto:logicguildltd@gmail.com"
                  className="text-primary font-bold hover:text-primary-light transition-colors"
                >
                  logicguildltd@gmail.com
                </a>.
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
