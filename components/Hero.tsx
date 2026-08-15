import { profile, socialLinks } from "@/data/profile";
import { IconLink } from "./ui/IconLink";

export function Hero() {
  return (
    <header className="py-16 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {profile.location}
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {profile.name}
      </h1>
      <p className="mt-2 font-mono text-sm text-muted sm:text-base">
        {profile.title}
      </p>
      <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted">
        {profile.tagline}
      </p>
      <nav aria-label="Profiles and contact" className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <IconLink
                href={link.href}
                icon={link.icon}
                label={link.label}
                handle={link.handle}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
