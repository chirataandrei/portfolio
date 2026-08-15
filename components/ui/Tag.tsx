export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[11px] tracking-tight text-muted">
      {children}
    </span>
  );
}

export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
