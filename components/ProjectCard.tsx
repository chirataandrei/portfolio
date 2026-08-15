import { isPublicRepo, type Project } from "@/data/projects";
import { Icon } from "./ui/Icon";
import { TagList } from "./ui/Tag";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-border-strong sm:p-7">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="text-lg font-medium tracking-tight sm:text-xl">
          <span className="mr-3 font-mono text-sm text-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.title}
        </h3>
        <p className="font-mono text-xs text-faint sm:text-right">
          {project.subtitle}
        </p>
      </div>

      <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-muted">
        {project.tagline}
      </p>

      <ul className="mt-5 space-y-2.5">
        {project.bullets.map((bullet) => (
          <li
            key={bullet}
            className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-border-strong"
          >
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <TagList items={project.tags} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {isPublicRepo(project.repo) ? (
          <a
            href={project.repo.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded border border-border-strong px-3 py-1.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
          >
            <Icon name="github" className="h-4 w-4" />
            <span>View source</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded border border-border px-3 py-1.5 font-mono text-xs text-faint">
            <Icon name="lock" className="h-3.5 w-3.5" />
            private repo - available on request
          </span>
        )}

        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-border-strong hover:text-fg"
          >
            <Icon name="external" className="h-4 w-4" />
            <span>Live demo</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
