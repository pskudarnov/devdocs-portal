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
    title: "Content density and readiness polish",
    summary:
      "Refined docs content tone, tightened navigation consistency, and hardened copy-to-clipboard behavior for production use.",
    badges: ["Improved", "Fixed", "Changed"],
    bullets: [
      "Reviewed all 24 articles to remove template-like phrasing and keep summaries, sections, and tags specific to real workflows.",
      "Aligned supporting pages and discovery paths across header/footer/sitemap so architecture, resources, and status are easy to find.",
      "Hardened code-block copy actions with fallback behavior and failure state without breaking UI when Clipboard API is unavailable.",
      "Updated project docs and smoke-check guidance to match the live domain and PM2 runtime commands.",
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
