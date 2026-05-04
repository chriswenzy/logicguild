import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service | LogicGuild",
  description: "Terms and conditions for using LogicGuild services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 bg-background">
      <Navbar />
      
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-text-primary tracking-tighter mb-12">
            Terms of Service
          </h1>
          
          <div className="space-y-12 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by LogicGuild, you agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">2. Services</h2>
              <p>
                LogicGuild provides software development, UI/UX design, and technical consulting services. 
                Specific project terms, timelines, and deliverables will be outlined in separate 
                service agreements or statements of work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">3. Intellectual Property</h2>
              <p>
                Unless otherwise agreed upon in writing, all intellectual property rights for work 
                created during a project will be transferred to the client upon full payment. 
                LogicGuild retains the right to showcase the work in its portfolio for promotional purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">4. Limitation of Liability</h2>
              <p>
                LogicGuild shall not be liable for any indirect, incidental, special, or consequential 
                damages resulting from the use or inability to use our services or for the cost of 
                procurement of substitute services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">5. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the 
                jurisdiction in which LogicGuild operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <p className="text-sm pt-8 border-t border-border">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
