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
export type DocCallout = { type: "note" | "tip" | "warning"; title: string; body: string };

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
  tags: string[];
  summary?: string;
  prerequisites?: string[];
  outcomes?: string[];
  callouts?: DocCallout[];
  relatedSlugs?: string[];
  sections: DocSection[];
  codeExamples: DocCodeExample[];
};

export const docs: DocItem[] = [
  {
    id: "d1",
    slug: "quick-start",
    title: "Quick Start",
    description:
      "Get the portal running locally, verify key routes, and run the same checks used before push.",
    category: "Getting Started",
    difficulty: "Beginner",
    updatedAt: "2026-05-18",
    readTime: "7 min",
    popularity: 100,
    tags: ["onboarding", "nextjs", "quality-gates", "app-router"],
    summary: "Set up locally, verify routes, and run baseline checks.",
    prerequisites: [
      "Node.js 20+ and npm installed.",
      "Repository cloned.",
      "Terminal in project root.",
    ],
    outcomes: ["App starts locally", "Core routes verified", "Quality gate completed"],
    callouts: [
      {
        type: "note",
        title: "Run from repo root",
        body: "Run commands from repository root so scripts and lockfile match CI.",
      },
      {
        type: "tip",
        title: "Separate setup from feature work",
        body: "Run a clean build once before editing UI to isolate environment issues.",
      },
    ],
    relatedSlugs: ["installation", "local-development-workflow", "deployment-checklist"],
    sections: [
      {
        heading: "Install dependencies",
        body: "Install packages and keep lockfile changes intentional.",
      },
      {
        heading: "Check main routes",
        body: "Open /, /docs, and /changelog after starting dev server.",
      },
      {
        heading: "Execute quality gate",
        body: "Run format check, typecheck, lint, and build before push.",
      },
    ],
    codeExamples: [
      {
        title: "Baseline checks",
        language: "bash",
        code: "npm run format:check\nnpm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d2",
    slug: "installation",
    title: "Installation",
    description: "Install dependencies with reproducible settings and verify build readiness.",
    category: "Getting Started",
    difficulty: "Beginner",
    updatedAt: "2026-05-18",
    readTime: "8 min",
    popularity: 94,
    tags: ["setup", "node", "npm", "reproducibility"],
    summary: "Install once with lockfile integrity and validate the runtime.",
    prerequisites: ["Node.js 20+ available.", "npm in PATH.", "Access to repo root."],
    outcomes: ["Stable local runtime", "Clean install", "Successful production build"],
    callouts: [
      {
        type: "warning",
        title: "Avoid mixed package managers",
        body: "Do not mix npm with yarn/pnpm in this repository unless migration is planned.",
      },
      {
        type: "tip",
        title: "Fix environment before coding",
        body: "If build fails right after install, resolve environment issues first.",
      },
    ],
    relatedSlugs: ["quick-start", "environment-variables", "production-build"],
    sections: [
      { heading: "Confirm versions", body: "Check node and npm versions before installation." },
      { heading: "Install from root", body: "Run npm install from repository root only." },
      { heading: "Smoke build", body: "Run npm run build immediately after install." },
    ],
    codeExamples: [
      { title: "Bootstrap", language: "bash", code: "node -v\nnpm -v\nnpm install\nnpm run build" },
    ],
  },
  {
    id: "d3",
    slug: "environment-variables",
    title: "Environment Variables",
    description: "Configure site URL and runtime flags without exposing secrets.",
    category: "Getting Started",
    difficulty: "Beginner",
    updatedAt: "2026-05-18",
    readTime: "8 min",
    popularity: 90,
    tags: ["env", "configuration", "seo", "deployment"],
    summary: "Set required variables and validate metadata output.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Environment Variables directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply environment variables changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d4",
    slug: "local-development-workflow",
    title: "Local Development Workflow",
    description: "Follow a consistent branch-to-validation loop for daily work.",
    category: "Getting Started",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "9 min",
    popularity: 88,
    tags: ["git", "workflow", "reviews", "checks"],
    summary: "Keep day-to-day changes small, reviewable, and reproducible.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Local Development Workflow directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply local development workflow changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d5",
    slug: "repository-conventions",
    title: "Repository Conventions",
    description: "Document naming, ownership, and commit conventions used in this codebase.",
    category: "Getting Started",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "9 min",
    popularity: 80,
    tags: ["conventions", "git", "codebase", "reviews"],
    summary: "Conventions that reduce review churn and accidental regressions.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Repository Conventions directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply repository conventions changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d6",
    slug: "api-error-model",
    title: "API Error Model",
    description: "Use a predictable error payload so UI states and retries are deterministic.",
    category: "API",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "10 min",
    popularity: 84,
    tags: ["api", "errors", "contracts", "ui"],
    summary: "Status mapping and payload shape for stable client handling.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "API Error Model directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply api error model changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d7",
    slug: "pagination-and-filtering",
    title: "Pagination and Filtering",
    description: "Design stable list responses for query, filters, and sorting.",
    category: "API",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "10 min",
    popularity: 78,
    tags: ["api", "pagination", "filters", "search"],
    summary: "Reliable pagination and filter contracts for docs catalogs.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Pagination and Filtering directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply pagination and filtering changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d8",
    slug: "request-lifecycle",
    title: "Request Lifecycle",
    description: "Track each request from route handler to rendered state and logs.",
    category: "API",
    difficulty: "Advanced",
    updatedAt: "2026-05-18",
    readTime: "11 min",
    popularity: 76,
    tags: ["observability", "requests", "timing", "api"],
    summary: "Request checkpoints and instrumentation points for debugging.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Request Lifecycle directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply request lifecycle changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d9",
    slug: "typed-api-responses",
    title: "Typed API Responses",
    description: "Keep route payloads and UI consumers aligned with shared TypeScript types.",
    category: "API",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "9 min",
    popularity: 73,
    tags: ["typescript", "api", "contracts", "validation"],
    summary: "Typed payload patterns with runtime-safe parsing.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Typed API Responses directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply typed api responses changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d10",
    slug: "design-tokens",
    title: "Design Tokens",
    description: "Apply tokens for spacing, color, and typography across docs UI.",
    category: "Components",
    difficulty: "Beginner",
    updatedAt: "2026-05-18",
    readTime: "8 min",
    popularity: 82,
    tags: ["design-system", "tokens", "tailwind", "ui"],
    summary: "Token rules that keep the interface consistent across themes.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Design Tokens directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply design tokens changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d11",
    slug: "code-blocks",
    title: "Code Blocks",
    description: "Render readable examples with clear labels and reliable copy actions.",
    category: "Components",
    difficulty: "Beginner",
    updatedAt: "2026-05-18",
    readTime: "8 min",
    popularity: 88,
    tags: ["code", "clipboard", "ui", "accessibility"],
    summary: "Code block behavior for article readability and trust.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Code Blocks directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply code blocks changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d12",
    slug: "navigation-components",
    title: "Navigation Components",
    description: "Keep header, sidebar, and footer navigation consistent across routes.",
    category: "Components",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "9 min",
    popularity: 79,
    tags: ["navigation", "layout", "ux", "a11y"],
    summary: "Navigation behavior for desktop, mobile, and deep links.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Navigation Components directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply navigation components changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d13",
    slug: "theme-system",
    title: "Theme System",
    description: "Implement dark/light persistence without hydration flicker.",
    category: "Components",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "10 min",
    popularity: 86,
    tags: ["theme", "hydration", "css", "ui"],
    summary: "Theme initialization and visual regression checks.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Theme System directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply theme system changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d14",
    slug: "empty-states",
    title: "Empty States",
    description: "Design no-results states that help users recover quickly.",
    category: "Components",
    difficulty: "Beginner",
    updatedAt: "2026-05-18",
    readTime: "7 min",
    popularity: 70,
    tags: ["ux", "empty-state", "search", "recovery"],
    summary: "Actionable empty states for docs browsing workflows.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Empty States directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply empty states changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d15",
    slug: "search-experience",
    title: "Search Experience",
    description: "Tune search relevance, filtering behavior, and fallback paths.",
    category: "Guides",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "10 min",
    popularity: 92,
    tags: ["search", "ranking", "ux", "docs"],
    summary: "Practical search tuning for a medium-sized docs catalog.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Search Experience directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply search experience changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d16",
    slug: "accessibility-patterns",
    title: "Accessibility Patterns",
    description: "Apply keyboard, focus, and semantic patterns in docs pages.",
    category: "Guides",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "10 min",
    popularity: 77,
    tags: ["accessibility", "a11y", "keyboard", "semantics"],
    summary: "High-impact accessibility checks for documentation portals.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Accessibility Patterns directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply accessibility patterns changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d17",
    slug: "seo-metadata",
    title: "SEO Metadata",
    description: "Configure metadata, robots, and canonical URLs for public indexing.",
    category: "Guides",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "9 min",
    popularity: 85,
    tags: ["seo", "metadata", "robots", "sitemap"],
    summary: "SEO setup for Next.js App Router documentation sites.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "SEO Metadata directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply seo metadata changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d18",
    slug: "content-modeling",
    title: "Content Modeling",
    description: "Structure docs fields for cards, article pages, and search.",
    category: "Guides",
    difficulty: "Advanced",
    updatedAt: "2026-05-18",
    readTime: "11 min",
    popularity: 74,
    tags: ["content-model", "typescript", "docs", "data"],
    summary: "How this repository models dense but maintainable docs content.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Content Modeling directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply content modeling changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d19",
    slug: "release-notes-workflow",
    title: "Release Notes Workflow",
    description: "Keep changelog entries factual and tied to shipped scope.",
    category: "Guides",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "8 min",
    popularity: 72,
    tags: ["changelog", "releases", "communication", "ops"],
    summary: "Release note template for engineering-facing updates.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Release Notes Workflow directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply release notes workflow changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d20",
    slug: "production-build",
    title: "Production Build",
    description: "Run and inspect production build output before restart.",
    category: "Deployment",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "8 min",
    popularity: 89,
    tags: ["build", "nextjs", "ci", "deploy"],
    summary: "Build checks required before PM2 restart.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Production Build directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply production build changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d21",
    slug: "pm2-deployment",
    title: "PM2 Deployment",
    description: "Restart and verify the portal safely with PM2.",
    category: "Deployment",
    difficulty: "Advanced",
    updatedAt: "2026-05-18",
    readTime: "10 min",
    popularity: 91,
    tags: ["pm2", "deploy", "process", "ops"],
    summary: "PM2 workflow for reliable updates and env refresh.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "PM2 Deployment directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply pm2 deployment changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d22",
    slug: "smoke-testing",
    title: "Smoke Testing",
    description: "Use a small curl matrix to validate critical public routes.",
    category: "Deployment",
    difficulty: "Beginner",
    updatedAt: "2026-05-18",
    readTime: "7 min",
    popularity: 83,
    tags: ["smoke-tests", "curl", "release", "monitoring"],
    summary: "Fast post-release checks for route and metadata availability.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "production-build"],
    sections: [
      {
        heading: "Why this matters",
        body: "Smoke Testing directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply smoke testing changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d23",
    slug: "rollback-strategy",
    title: "Rollback Strategy",
    description: "Prepare rollback steps when release quality drops.",
    category: "Deployment",
    difficulty: "Advanced",
    updatedAt: "2026-05-18",
    readTime: "10 min",
    popularity: 68,
    tags: ["rollback", "incident", "release", "pm2"],
    summary: "Rollback playbook for route availability and SEO endpoints.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Rollback Strategy directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply rollback strategy changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
  {
    id: "d24",
    slug: "deployment-checklist",
    title: "Deployment Checklist",
    description: "Use one checklist for pre-deploy, restart, and post-deploy checks.",
    category: "Deployment",
    difficulty: "Intermediate",
    updatedAt: "2026-05-18",
    readTime: "9 min",
    popularity: 95,
    tags: ["checklist", "deploy", "qa", "release"],
    summary: "Single checklist from local gate to production smoke tests.",
    prerequisites: [
      "Project builds locally.",
      "Relevant files identified.",
      "Feature branch is up to date.",
    ],
    outcomes: [
      "Clear implementation scope",
      "Repeatable validation",
      "Documented follow-up checks",
    ],
    callouts: [
      {
        type: "note",
        title: "Stay concrete",
        body: "Use project-specific files, commands, and routes instead of generic instructions.",
      },
      {
        type: "tip",
        title: "Always verify",
        body: "Attach at least one command or page check to prove the change works.",
      },
    ],
    relatedSlugs: ["quick-start", "deployment-checklist", "smoke-testing"],
    sections: [
      {
        heading: "Why this matters",
        body: "Deployment Checklist directly affects delivery quality and support load, so this page should stay practical and specific.",
      },
      {
        heading: "Implementation notes",
        body: "Apply deployment checklist changes in small increments and keep examples mapped to existing repository files.",
      },
      {
        heading: "Verification",
        body: "Run relevant checks and verify route behavior in browser and through CLI where applicable.",
      },
    ],
    codeExamples: [
      {
        title: "Practical command",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run build",
      },
    ],
  },
];
