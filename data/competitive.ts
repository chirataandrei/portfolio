export const codeforces = {
  handle: "_chirata_",
  url: "https://codeforces.com/profile/_chirata_",
  rating: 1464,
  rank: "specialist",
} as const;

export const algorithmTopics: readonly string[] = [
  "Graph theory (BFS/DFS, Dijkstra, MST, SCC)",
  "Max-flow / min-cut and bipartite matching",
  "Advanced dynamic programming (bitmask, digit, tree DP)",
  "Segment trees, Fenwick trees, lazy propagation",
  "Binary search on the answer, two pointers",
  "Number theory, combinatorics, modular arithmetic",
  "Greedy and heuristic search under a time budget",
];

export type Achievement = {
  title: string;
  detail: string;
  href?: string;
};

export const achievements: readonly Achievement[] = [
  {
    title: "Bitdefender Programming Contest 2026",
    detail:
      "Interactive game-bot problem solved with a beam search over a hand-written evaluation function, replanning every day against the actual dice roll.",
    href: "https://github.com/chirataandrei/Bitdefender-Programming-Contest-2026",
  },
  {
    title: "Google AI Vision Competition",
    detail:
      "Computer vision pipeline built and submitted under contest constraints.",
    href: "https://github.com/chirataandrei/Google-AI-Vision-Competition",
  },
  {
    title: "Consistent problem solving",
    detail:
      "Regular Codeforces rounds plus a maintained NeetCode log, kept as compilable C++ rather than scratch solutions.",
    href: "https://github.com/chirataandrei/neetcode-submissions",
  },
];
