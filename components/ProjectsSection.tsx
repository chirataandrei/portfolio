import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./ui/Section";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Featured projects"
      subtitle="Architecture, the optimisation that mattered, and what it measured."
    >
      <div className="flex flex-col gap-4 sm:gap-6">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
