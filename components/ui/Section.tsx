export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border py-14 sm:py-20">
      <div className="mb-8 flex flex-col gap-1 sm:mb-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-sm text-faint">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
