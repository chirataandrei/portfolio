export type SkillGroup = {
  title: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "C",
      "C++17 / C++20",
      "Python",
      "TypeScript",
      "x86_64 Assembly",
      "ARM64 Assembly",
      "SQL",
    ],
  },
  {
    title: "Systems & Tools",
    items: [
      "Linux / POSIX",
      "Git",
      "CMake",
      "Make",
      "Docker",
      "GDB",
      "Valgrind",
      "perf",
      "QEMU / UTM",
      "PostgreSQL",
    ],
  },
  {
    title: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Operating System Internals",
      "Memory Management",
      "Concurrency",
      "Network Protocols",
      "Computer Architecture",
      "Cache-aware Optimisation",
    ],
  },
];
