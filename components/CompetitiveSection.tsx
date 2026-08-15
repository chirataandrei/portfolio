import { achievements, algorithmTopics, codeforces } from "@/data/competitive";
import { Icon } from "./ui/Icon";
import { Section } from "./ui/Section";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded border border-border bg-surface px-4 py-3">
      <p className="font-mono text-xl text-fg">{value}</p>
      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-faint">
        {label}
      </p>
    </div>
  );
}

export function CompetitiveSection() {
  return (
    <Section id="competitive" title="Competitive programming">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div>
          <a
            href={codeforces.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            <Icon name="codeforces" className="h-4 w-4" />
            codeforces.com/profile/{codeforces.handle}
            <Icon
              name="external"
              className="h-3 w-3 text-faint transition-colors group-hover:text-accent"
            />
          </a>

          <div className="mt-4 max-w-48">
            <Stat value={String(codeforces.rating)} label={codeforces.rank} />
          </div>

          <ul className="mt-6 space-y-3">
            {achievements.map((achievement) => (
              <li key={achievement.title}>
                {achievement.href ? (
                  <a
                    href={achievement.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm font-medium text-fg transition-colors hover:text-accent"
                  >
                    {achievement.title}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-fg">
                    {achievement.title}
                  </span>
                )}
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {achievement.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-fg">
            Algorithms I reach for
          </p>
          <ul className="space-y-2">
            {algorithmTopics.map((topic) => (
              <li
                key={topic}
                className="relative pl-5 font-mono text-[13px] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-border-strong"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
