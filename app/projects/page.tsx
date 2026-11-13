import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/constants/projects";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Selected Work | LOGIC GUILD LIMITED",
  description: "A showcase of high-performance digital platforms, commerce solutions, and custom software delivered by LOGIC GUILD LIMITED.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 bg-background text-text-primary">
      <Navbar />

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
                Selected Work
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary tracking-tight mb-6">
                Verified digital platforms built with{" "}
                <span className="text-primary-light">precision and care</span>
              </h1>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                From high-performing e-commerce applications and bidding platforms
                to automotive portals and corporate systems, explore digital
                solutions we have designed, delivered, and supported.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={0.1 * (index % 3)}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
