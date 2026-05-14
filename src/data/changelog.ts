export type ChangelogBadge = "Added" | "Improved" | "Fixed" | "Changed";

export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  summary: string;
  badges: ChangelogBadge[];
  bullets: string[];
};

export const changelog: ChangelogEntry[] = [
  {
    version: "2.4.0",
    date: "2026-05-14",
    title: "Documentation density pass",
    summary:
      "Expanded the content model and documentation catalog to make the portal look and read like a production docs product.",
    badges: ["Added", "Improved", "Changed"],
    bullets: [
      "Expanded docs catalog to 24 articles with richer metadata, tags, outcomes, prerequisites, and related links.",
      "Upgraded home, docs catalog, article, and changelog pages with denser product-style blocks and release confidence context.",
      "Added architecture and resources pages, then linked them across footer and sitemap for discoverability.",
      "Improved docs article UX with breadcrumbs, callouts, related guides, and stronger on-page navigation.",
    ],
  },
  {
    version: "2.3.0",
    date: "2026-05-11",
    title: "Search and filter UX",
    summary:
      "Introduced live docs filtering and sorting to speed up article discovery for engineering workflows.",
    badges: ["Added", "Improved"],
    bullets: [
      "Implemented query, category, and difficulty filters in the docs explorer.",
      "Added sort modes for popularity, recent updates, and alphabetical scanning.",
      "Improved empty states with reset actions to recover from over-filtered results.",
    ],
  },
  {
    version: "2.2.0",
    date: "2026-05-09",
    title: "Theme system and layout polish",
    summary: "Stabilized dark/light behavior and refined spacing across high-traffic screens.",
    badges: ["Improved", "Fixed"],
    bullets: [
      "Added theme initialization logic to prevent visual flashes during hydration.",
      "Refined shared spacing and surface contrast across hero, cards, and article layout blocks.",
      "Fixed nav-state inconsistencies between desktop and mobile menu variants.",
    ],
  },
  {
    version: "2.1.0",
    date: "2026-05-06",
    title: "Docs article templates",
    summary:
      "Created a consistent article structure for sections, examples, and technical metadata.",
    badges: ["Added", "Changed"],
    bullets: [
      "Introduced reusable article sections with heading anchors for deep linking.",
      "Added code examples with copy actions and stable monospace rendering.",
      "Standardized metadata rows for category, difficulty, read time, and updated date.",
    ],
  },
  {
    version: "2.0.0",
    date: "2026-05-01",
    title: "Premium redesign",
    summary: "Launched the premium visual baseline and docs-first navigation architecture.",
    badges: ["Added", "Changed"],
    bullets: [
      "Reworked landing layout with stronger visual hierarchy and clearer conversion paths.",
      "Shipped docs index and dynamic article routes with static generation.",
      "Added sitemap and robots outputs to support SEO-friendly indexing.",
    ],
  },
];
