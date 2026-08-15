import { Icon, type IconName } from "./Icon";

export function IconLink({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: IconName;
  label: string;
  handle?: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="group inline-flex items-center gap-2 rounded border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-border-strong hover:text-fg"
    >
      <Icon
        name={icon}
        className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-accent"
      />
      <span>{label}</span>
      {handle ? (
        <span className="hidden font-mono text-xs text-faint sm:inline">
          {handle}
        </span>
      ) : null}
    </a>
  );
}
