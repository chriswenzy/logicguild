import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/constants/projects";

export const metadata = {
  title: "Projects | LogicGuild",
  description: "A showcase of high-end digital products built by LogicGuild.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 bg-background">
      <Navbar />
      
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-text-primary tracking-tighter mb-8">
              Engineering impact through <br />
              <span className="text-primary">technical precision</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              From high-performance e-commerce platforms to complex enterprise ERPs, 
              we build products that define industries. Explore our latest work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
