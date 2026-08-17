export type Repo = { url: string } | { private: true };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  tags: readonly string[];
  bullets: readonly [string, string, string];
  repo: Repo;
  demo?: string;
};

export type SmallProject = {
  title: string;
  description: string;
  tags: readonly string[];
  repo: Repo;
};

export function isPublicRepo(repo: Repo): repo is { url: string } {
  return "url" in repo;
}

export const featuredProjects: readonly Project[] = [
  {
    slug: "limit-order-book",
    title: "Limit Order Book",
    subtitle: "Low-latency trading infrastructure",
    tagline:
      "A from-scratch central limit order book with price-time priority, built with no external dependencies and no allocation on the hot path.",
    tags: ["C++20", "Lock-free structures", "Cache locality", "Benchmarking"],
    bullets: [
      "Orders live in an ObjectPool<Order, 1'000'000> that takes 64 MB from the OS once at startup; add and cancel pop and push a free list, so the hot path never touches the heap.",
      "Each Order is a 64-byte cache-line-aligned node carrying its own list pointers plus a back-pointer to its PriceLevel, which turns cancel into order id -> Order* -> intrusive unlink in O(1), with no map lookup and no search.",
      "Measured with a warmup-and-samples harness on x86-64 Linux (-O2 -march=native): add+match 83 ns mean / 84 ns p99 over 500k aggressive orders, and a sweep clearing 1,000 price levels at 45 ns per level.",
    ],
    repo: { url: "https://github.com/chirataandrei/Limit-Order-Book" },
  },
  {
    slug: "memory-allocator",
    title: "Memory Allocator",
    subtitle: "Systems programming / OS internals",
    tagline:
      "A drop-in replacement for malloc, calloc, realloc and free, built directly on the Linux virtual memory syscalls and shipped as a shared library.",
    tags: ["C", "Linux syscalls", "brk / mmap", "Virtual memory"],
    bullets: [
      "Allocations below MMAP_THRESHOLD extend the heap with brk() and are served from a block list with metadata headers; larger ones get their own mmap() mapping released with munmap(), so big buffers never fragment the heap.",
      "Free blocks are coalesced with their neighbours and split when oversized; realloc first tries to expand in place, absorbing adjacent free blocks one at a time, and only copies when the block genuinely has to move.",
      "Correctness is checked by diffing the exact syscall trace of every operation against a reference implementation across the full test suite, which catches wrong block reuse and split decisions that a value-only test would miss.",
    ],
    repo: { url: "https://github.com/chirataandrei/Memory-Allocator" },
  },
  {
    slug: "provctl",
    title: "provctl",
    subtitle: "Developer tooling / supply-chain security",
    tagline:
      "A pre-commit gate that blocks a dependency which does not exist on PyPI - the signature of a hallucinated package name - without any network call.",
    tags: ["Python", "Static analysis", "Threat modelling", "Measurement"],
    bullets: [
      "Parses requirements files, pyproject and imports, then resolves every declared distribution against a local exact name index; monorepo workspace members, [tool.uv.sources] redirects and private index URLs are recognised so they never reach the block path.",
      "The index is the exact name set at 12.4 MB rather than a 3.1 MB Bloom filter: a Bloom false positive means a hallucinated package is silently accepted, which is the one error this tool must not make. Lookups take 4.2 microseconds and no package name ever leaves the machine.",
      "Measured on 30 widely-used open-source Python projects: zero false positives and 100% of synthetic hallucinated names blocked. The same measurement falsified the project's original thesis - provenance can only change a verdict for 0.14% of real dependencies - so it was rescoped to triage rather than accuracy.",
    ],
    repo: { private: true },
  },
  {
    slug: "ink",
    title: "Ink",
    subtitle: "Full-stack / AI product",
    tagline:
      "A document editor that keeps your reference material beside the page and drafts with you, grounded only in the knowledge you attach.",
    tags: ["Next.js", "TypeScript", "Convex", "Gemini", "Webhooks"],
    bullets: [
      "Three-column editor - knowledge sources, Tiptap document, AI chat - over a reactive Convex backend, where queries are live subscriptions, so an edit or a streamed completion reaches every open client with no polling layer.",
      "The Gemini key and all model calls live on the backend deployment and never enter the browser bundle; the chat can answer, draft or rewrite a selection and write the result straight into the document.",
      "Access is gated server-side: Polar sends signed webhooks, subscription state is written into the database, and the dashboard and editor routes read that state on the server, so a paywalled route cannot be reached by manipulating the client.",
    ],
    repo: { private: true },
  },
];

export const otherProjects: readonly SmallProject[] = [
  {
    title: "Market Data Pipeline",
    description:
      "Binance websocket ticks into Postgres, batched into explicit transactions with a bounded buffer so a crash can only lose whole batches. The database has no published port and pg_hba.conf accepts exactly one internal IP.",
    tags: ["Python", "Docker", "PostgreSQL"],
    repo: { private: true },
  },
  {
    title: "Pairs Trading Strategy",
    description:
      "Statistical arbitrage pipeline on co-integrated assets: rolling z-score features over synthetic tick data, chronological split to avoid look-ahead bias, and a classifier for entry and exit signals.",
    tags: ["Python", "Time series", "ML"],
    repo: { url: "https://github.com/chirataandrei/Pairs-Trading-Strategy" },
  },
  {
    title: "Bitdefender Contest 2026 Bot",
    description:
      "Beam search bot for an interactive resource-and-network game: one-day-ahead replanning over a hand-written evaluation, with reachability packed into bitmasks so connectivity checks stay O(1).",
    tags: ["C++", "Heuristic search"],
    repo: {
      url: "https://github.com/chirataandrei/Bitdefender-Programming-Contest-2026",
    },
  },
  {
    title: "System Call Manager",
    description:
      "Incident dispatch system in C built on hand-written doubly linked lists, stacks and priority queues with sentinel nodes, including undo of the last dispatch and leak-free teardown.",
    tags: ["C", "Data structures"],
    repo: { url: "https://github.com/chirataandrei/System-Call-Manager" },
  },
  {
    title: "Sparse-View CT Reconstruction",
    description:
      "Reconstruction from a reduced number of projections, trading acquisition dose against the ill-conditioning that sparse sampling introduces.",
    tags: ["MATLAB", "Numerical methods"],
    repo: {
      url: "https://github.com/chirataandrei/Sparse-View-CT-Reconstruction",
    },
  },
  {
    title: "NeetCode Submissions",
    description:
      "Running log of solved interview problems, kept as compilable C++ with the reasoning for the chosen approach.",
    tags: ["C++", "Algorithms"],
    repo: { url: "https://github.com/chirataandrei/neetcode-submissions" },
  },
];
