import { isPublicRepo, otherProjects } from "@/data/projects";
import { Icon } from "./ui/Icon";
import { Section } from "./ui/Section";

export function OtherWork() {
  return (
    <Section id="other" title="Other work">
      <ul className="grid gap-4 sm:grid-cols-2">
        {otherProjects.map((project) => (
          <li
            key={project.title}
            className="rounded border border-border p-4 transition-colors hover:border-border-strong"
          >
            {isPublicRepo(project.repo) ? (
              <a
                href={project.repo.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-start gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
              >
                {project.title}
                <Icon
                  name="external"
                  className="mt-1 h-3 w-3 shrink-0 text-faint transition-colors group-hover:text-accent"
                />
              </a>
            ) : (
              <span className="inline-flex items-start gap-1.5 text-sm font-medium text-fg">
                {project.title}
                <Icon name="lock" className="mt-1 h-3 w-3 shrink-0 text-faint" />
              </span>
            )}
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <p className="mt-3 font-mono text-[11px] text-faint">
              {project.tags.join(" / ")}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
