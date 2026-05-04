import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | LogicGuild",
  description: "Privacy policy and data protection practices at LogicGuild.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 bg-background">
      <Navbar />
      
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-text-primary tracking-tighter mb-12">
            Privacy Policy
          </h1>
          
          <div className="space-y-12 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when you fill out a contact form, 
                sign up for our newsletter, or communicate with us. This may include your name, 
                email address, phone number, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, 
                to communicate with you about your projects, and to send you technical notices, 
                updates, and administrative messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">3. Data Security</h2>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, 
                misuse, and unauthorized access, disclosure, alteration, and destruction. However, 
                no security system is impenetrable and we cannot guarantee the security of our data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">4. Third-Party Services</h2>
              <p>
                We may use third-party service providers to help us operate our business or 
                administer activities on our behalf. We only share information with these parties 
                as necessary to perform their functions and in accordance with our instructions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at 
                <a href="mailto:logicguildltd@gmail.com" className="text-primary ml-1 font-bold">logicguildltd@gmail.com</a>.
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
