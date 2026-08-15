export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  icon: "github" | "linkedin" | "codeforces" | "mail" | "file";
};

export const profile = {
  name: "Andrei Chirata",
  title: "Software Engineering Student @ UPB CTI",
  tagline:
    "I work on low-level systems, high-performance computing and algorithmic problem solving - allocators, order books and anything where latency and memory layout are the design.",
  location: "Bucharest, Romania",
  siteUrl: "https://chirataandrei.vercel.app",
  email: "andrei.chirata2006@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1mYoM_dyFDNB33Ygrkx6v2UcEaHVMkz34/view?usp=sharing",
  repoUrl: "https://github.com/chirataandrei/portfolio",
} as const;

export const socialLinks: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/chirataandrei",
    handle: "chirataandrei",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andrei-chirata-7a6a46182",
    handle: "andrei-chirata",
    icon: "linkedin",
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/_chirata_",
    handle: "_chirata_",
    icon: "codeforces",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    handle: profile.email,
    icon: "mail",
  },
  {
    label: "CV",
    href: profile.resumeUrl,
    handle: "PDF",
    icon: "file",
  },
];
