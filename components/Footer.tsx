import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="flex flex-col gap-2 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          <a
            href={profile.repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-accent"
          >
            Source of this site on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
