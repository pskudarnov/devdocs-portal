export type DocCategory = "Getting Started" | "API" | "Components" | "Guides" | "Deployment";
export type DocDifficulty = "Beginner" | "Intermediate" | "Advanced";

export const docCategories = [
  "Getting Started",
  "API",
  "Components",
  "Guides",
  "Deployment",
] as const satisfies readonly DocCategory[];

export const docDifficulties = [
  "Beginner",
  "Intermediate",
  "Advanced",
] as const satisfies readonly DocDifficulty[];

export type DocSection = { heading: string; body: string };
export type DocCodeExample = { title: string; language: string; code: string };

export type DocItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: DocCategory;
  difficulty: DocDifficulty;
  updatedAt: string;
  readTime: string;
  popularity: number;
  sections: DocSection[];
  codeExamples: DocCodeExample[];
};

export const docs: DocItem[] = [
  {
    id: "d1",
    slug: "quick-start",
    title: "Quick Start",
    description: "Set up the project and run your first screen in minutes.",
    category: "Getting Started",
    difficulty: "Beginner",
    updatedAt: "2026-05-01",
    readTime: "6 min",
    popularity: 100,
    sections: [
      {
        heading: "Install dependencies",
        body: "Use npm install and run npm run dev to start local docs portal.",
      },
      {
        heading: "Create first route",
        body: "Add app/docs/page.tsx and export a default page component.",
      },
    ],
    codeExamples: [{ title: "Run dev server", language: "bash", code: "npm install\nnpm run dev" }],
  },
  {
    id: "d2",
    slug: "project-structure",
    title: "Project Structure",
    description: "Understand route groups, components and data layers.",
    category: "Getting Started",
    difficulty: "Beginner",
    updatedAt: "2026-05-02",
    readTime: "8 min",
    popularity: 85,
    sections: [
      {
        heading: "Folders",
        body: "Use app for routes, components for UI blocks, data for static content.",
      },
    ],
    codeExamples: [
      { title: "Structure", language: "txt", code: "src/app\nsrc/components\nsrc/data\nsrc/lib" },
    ],
  },
  {
    id: "d3",
    slug: "routing-basics",
    title: "Routing Basics",
    description: "Build nested routes with dynamic segments in App Router.",
    category: "Guides",
    difficulty: "Beginner",
    updatedAt: "2026-05-03",
    readTime: "7 min",
    popularity: 78,
    sections: [
      {
        heading: "Static and dynamic routes",
        body: "Create /docs and /docs/[slug] pages with typed params.",
      },
    ],
    codeExamples: [
      {
        title: "Dynamic route",
        language: "tsx",
        code: "export default async function Page({ params }: { params: Promise<{ slug: string }> }) {\n  const { slug } = await params;\n  return <div>{slug}</div>;\n}",
      },
    ],
  },
  {
    id: "d4",
    slug: "api-client-setup",
    title: "API Client Setup",
    description: "Organize fetch wrappers for maintainable data access.",
    category: "API",
    difficulty: "Intermediate",
    updatedAt: "2026-05-04",
    readTime: "9 min",
    popularity: 70,
    sections: [
      {
        heading: "Client function",
        body: "Create a typed client helper for consistent request handling.",
      },
    ],
    codeExamples: [
      {
        title: "fetch helper",
        language: "ts",
        code: "export async function api<T>(url: string): Promise<T> {\n  const res = await fetch(url);\n  if (!res.ok) throw new Error('Request failed');\n  return res.json() as Promise<T>;\n}",
      },
    ],
  },
  {
    id: "d5",
    slug: "authentication-flow",
    title: "Authentication Flow",
    description: "Describe sign-in, token refresh and protected routes.",
    category: "Guides",
    difficulty: "Intermediate",
    updatedAt: "2026-05-05",
    readTime: "10 min",
    popularity: 67,
    sections: [
      {
        heading: "Session flow",
        body: "Document auth boundaries and access policies with examples.",
      },
    ],
    codeExamples: [{ title: "guard", language: "ts", code: "if (!session) redirect('/login');" }],
  },
  {
    id: "d6",
    slug: "ui-components",
    title: "UI Components",
    description: "Reusable component composition and variant strategies.",
    category: "Components",
    difficulty: "Intermediate",
    updatedAt: "2026-05-05",
    readTime: "11 min",
    popularity: 73,
    sections: [
      {
        heading: "Composition",
        body: "Prefer small primitives and compose them for larger UI blocks.",
      },
    ],
    codeExamples: [
      { title: "Button variant", language: "tsx", code: '<Button variant="primary">Save</Button>' },
    ],
  },
  {
    id: "d7",
    slug: "forms-and-validation",
    title: "Forms and Validation",
    description: "Patterns for forms, validation and UX feedback.",
    category: "Guides",
    difficulty: "Intermediate",
    updatedAt: "2026-05-06",
    readTime: "12 min",
    popularity: 69,
    sections: [
      { heading: "Validation", body: "Validate fields and present clear errors near each input." },
    ],
    codeExamples: [{ title: "simple check", language: "ts", code: "const ok = value.length > 2;" }],
  },
  {
    id: "d8",
    slug: "data-fetching",
    title: "Data Fetching",
    description: "SSR and static generation data strategies.",
    category: "API",
    difficulty: "Advanced",
    updatedAt: "2026-05-06",
    readTime: "13 min",
    popularity: 62,
    sections: [
      {
        heading: "Server fetch",
        body: "Use async server components for deterministic data loading.",
      },
    ],
    codeExamples: [
      {
        title: "server component",
        language: "tsx",
        code: "export default async function Page() {\n  const data = await getData();\n  return <pre>{JSON.stringify(data)}</pre>;\n}",
      },
    ],
  },
  {
    id: "d9",
    slug: "error-handling",
    title: "Error Handling",
    description: "Graceful fallback patterns and recovery UX.",
    category: "Guides",
    difficulty: "Advanced",
    updatedAt: "2026-05-07",
    readTime: "9 min",
    popularity: 58,
    sections: [
      { heading: "Boundaries", body: "Use fallback UI with actionable retry and context." },
    ],
    codeExamples: [
      { title: "throw", language: "ts", code: "if (!value) throw new Error('Missing value');" },
    ],
  },
  {
    id: "d10",
    slug: "deployment-checklist",
    title: "Deployment Checklist",
    description: "Production checklist for release safety.",
    category: "Deployment",
    difficulty: "Beginner",
    updatedAt: "2026-05-07",
    readTime: "6 min",
    popularity: 91,
    sections: [
      { heading: "Checklist", body: "Run lint, typecheck, build and smoke checks before deploy." },
    ],
    codeExamples: [
      {
        title: "release",
        language: "bash",
        code: "npm run lint\nnpm run typecheck\nnpm run build",
      },
    ],
  },
  {
    id: "d11",
    slug: "performance-tips",
    title: "Performance Tips",
    description: "Practical performance heuristics for App Router projects.",
    category: "Guides",
    difficulty: "Advanced",
    updatedAt: "2026-05-08",
    readTime: "10 min",
    popularity: 63,
    sections: [
      {
        heading: "Optimizations",
        body: "Use memoization and sensible splitting where it adds value.",
      },
    ],
    codeExamples: [
      {
        title: "memo",
        language: "tsx",
        code: "const value = useMemo(() => heavyCalc(input), [input]);",
      },
    ],
  },
  {
    id: "d12",
    slug: "accessibility-checklist",
    title: "Accessibility Checklist",
    description: "Semantic and keyboard accessibility baseline.",
    category: "Components",
    difficulty: "Intermediate",
    updatedAt: "2026-05-08",
    readTime: "8 min",
    popularity: 76,
    sections: [
      {
        heading: "Semantics",
        body: "Ensure landmarks, labels and focus-visible support across pages.",
      },
    ],
    codeExamples: [
      {
        title: "button",
        language: "html",
        code: '<button type="button" aria-label="Open menu">Menu</button>',
      },
    ],
  },
];
