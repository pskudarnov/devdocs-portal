export type ChangelogType = "Added" | "Improved" | "Fixed";
export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  type: ChangelogType;
  bullets: string[];
};

export const changelog: ChangelogEntry[] = [
  {
    version: "1.2.0",
    date: "2026-05-08",
    title: "Docs UX improvements",
    type: "Improved",
    bullets: [
      "Added docs filters by category and difficulty",
      "Improved article readability and spacing",
    ],
  },
  {
    version: "1.1.0",
    date: "2026-05-05",
    title: "New API docs",
    type: "Added",
    bullets: ["Added API Client Setup and Data Fetching docs", "Expanded code examples section"],
  },
  {
    version: "1.0.1",
    date: "2026-05-03",
    title: "Navigation fixes",
    type: "Fixed",
    bullets: ["Fixed sidebar active states", "Fixed mobile menu close on route change"],
  },
  {
    version: "1.0.0",
    date: "2026-05-01",
    title: "Initial release",
    type: "Added",
    bullets: ["Launched portal with docs index and article pages"],
  },
];
