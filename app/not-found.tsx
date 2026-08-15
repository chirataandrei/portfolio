import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-5 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight">
        This page does not exist.
      </h1>
      <p className="mt-2 text-muted">
        The site is a single page, so everything lives at the root.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex w-fit rounded border border-border-strong px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
      >
        Back to the start
      </Link>
    </main>
  );
}
