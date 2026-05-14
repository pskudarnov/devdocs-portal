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

export const docs = [
  {
    id: "d1",
    slug: "quick-start",
    title: "Quick Start",
    description: "Get the portal running locally and understand the first delivery path.",
    category: "Getting Started",
    difficulty: "Beginner",
    updatedAt: "2026-05-14",
    readTime: "7 min",
    popularity: 100,
    tags: ["onboarding", "nextjs", "typescript", "quick", "app-router"],
    summary:
      "Quick Start explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: ["Run project locally", "Verify baseline routes", "Know required quality gates"],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["installation", "environment-variables", "api-error-model"],
    sections: [
      {
        heading: "Installation",
        body: "Installation Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "First run and route checks",
        body: "First run and route checks Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Daily command set",
        body: "Daily command set Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d2",
    slug: "installation",
    title: "Installation",
    description: "Install the toolchain and dependencies required for reproducible local builds.",
    category: "Getting Started",
    difficulty: "Beginner",
    updatedAt: "2026-05-14",
    readTime: "8 min",
    popularity: 94,
    tags: ["onboarding", "nextjs", "typescript", "installation", "app-router"],
    summary:
      "Installation explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Pin Node and npm versions",
      "Install without lock drift",
      "Validate local health endpoint",
    ],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: [
      "environment-variables",
      "local-development-workflow",
      "pagination-and-filtering",
    ],
    sections: [
      {
        heading: "Node and package manager requirements",
        body: "Node and package manager requirements Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Install dependencies with lockfile integrity",
        body: "Install dependencies with lockfile integrity Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Verify local runtime",
        body: "Verify local runtime Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d3",
    slug: "environment-variables",
    title: "Environment Variables",
    description:
      "Configure required variables for metadata, links, and environment-specific behavior.",
    category: "Getting Started",
    difficulty: "Beginner",
    updatedAt: "2026-05-14",
    readTime: "8 min",
    popularity: 90,
    tags: ["onboarding", "nextjs", "typescript", "environment", "app-router"],
    summary:
      "Environment Variables explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Know mandatory env keys",
      "Avoid leaking secrets",
      "Validate env-dependent metadata",
    ],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["local-development-workflow", "repository-conventions", "request-lifecycle"],
    sections: [
      {
        heading: "Required variables",
        body: "Required variables Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Local and production files",
        body: "Local and production files Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Validation strategy",
        body: "Validation strategy Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d4",
    slug: "local-development-workflow",
    title: "Local Development Workflow",
    description: "Use a predictable local workflow for coding, reviewing, and validating changes.",
    category: "Getting Started",
    difficulty: "Intermediate",
    updatedAt: "2026-05-14",
    readTime: "9 min",
    popularity: 88,
    tags: ["onboarding", "nextjs", "typescript", "local", "app-router"],
    summary:
      "Local Development Workflow explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: ["Work from feature branches", "Run scoped checks early", "Avoid broken pushes"],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["repository-conventions", "api-error-model", "typed-api-responses"],
    sections: [
      {
        heading: "Branch workflow",
        body: "Branch workflow Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Fast feedback loop",
        body: "Fast feedback loop Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Pre-push checks",
        body: "Pre-push checks Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d5",
    slug: "repository-conventions",
    title: "Repository Conventions",
    description: "Document naming, file ownership, and branch conventions used across the project.",
    category: "Getting Started",
    difficulty: "Intermediate",
    updatedAt: "2026-05-14",
    readTime: "9 min",
    popularity: 80,
    tags: ["onboarding", "nextjs", "typescript", "repository", "app-router"],
    summary:
      "Repository Conventions explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: ["Navigate codebase faster", "Write consistent commits", "Reduce review churn"],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["api-error-model", "pagination-and-filtering", "design-tokens"],
    sections: [
      {
        heading: "Directory ownership",
        body: "Directory ownership Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Naming standards",
        body: "Naming standards Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Commit hygiene",
        body: "Commit hygiene Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d6",
    slug: "api-error-model",
    title: "API Error Model",
    description: "Standardize API error shape and status mapping for predictable UI handling.",
    category: "API",
    difficulty: "Intermediate",
    updatedAt: "2026-05-14",
    readTime: "10 min",
    popularity: 84,
    tags: ["api", "contracts", "error-handling", "app-router"],
    summary:
      "API Error Model explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Return consistent error payloads",
      "Map failures to UX states",
      "Handle retries safely",
    ],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["pagination-and-filtering", "request-lifecycle", "code-blocks"],
    sections: [
      {
        heading: "Error envelope",
        body: "Error envelope Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "HTTP status mapping",
        body: "HTTP status mapping Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "UI integration",
        body: "UI integration Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d7",
    slug: "pagination-and-filtering",
    title: "Pagination and Filtering",
    description: "Design pagination and filter contracts that scale for docs catalogs.",
    category: "API",
    difficulty: "Intermediate",
    updatedAt: "2026-05-14",
    readTime: "10 min",
    popularity: 78,
    tags: ["api", "contracts", "error-handling", "pagination", "app-router"],
    summary:
      "Pagination and Filtering explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Implement stable pagination",
      "Expose filter combinations",
      "Prevent duplicate results",
    ],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["request-lifecycle", "typed-api-responses", "navigation-components"],
    sections: [
      {
        heading: "Cursor vs offset",
        body: "Cursor vs offset Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Filter grammar",
        body: "Filter grammar Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Response metadata",
        body: "Response metadata Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d8",
    slug: "request-lifecycle",
    title: "Request Lifecycle",
    description: "Track a request from UI interaction to response rendering and telemetry.",
    category: "API",
    difficulty: "Advanced",
    updatedAt: "2026-05-14",
    readTime: "11 min",
    popularity: 76,
    tags: ["api", "contracts", "error-handling", "request", "app-router"],
    summary:
      "Request Lifecycle explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Trace request boundaries",
      "Instrument critical timings",
      "Handle cancellation paths",
    ],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["typed-api-responses", "design-tokens", "theme-system"],
    sections: [
      {
        heading: "Client trigger",
        body: "Client trigger Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Server processing",
        body: "Server processing Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Post-response handling",
        body: "Post-response handling Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d9",
    slug: "typed-api-responses",
    title: "Typed API Responses",
    description: "Use TypeScript schemas and guards to keep API responses safe at runtime.",
    category: "API",
    difficulty: "Advanced",
    updatedAt: "2026-05-14",
    readTime: "11 min",
    popularity: 82,
    tags: ["api", "contracts", "error-handling", "typed", "app-router"],
    summary:
      "Typed API Responses explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Infer safe payload types",
      "Protect against malformed JSON",
      "Return typed fallbacks",
    ],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["design-tokens", "code-blocks", "empty-states"],
    sections: [
      {
        heading: "Type contracts",
        body: "Type contracts Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Runtime parsing",
        body: "Runtime parsing Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Error fallbacks",
        body: "Error fallbacks Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d10",
    slug: "design-tokens",
    title: "Design Tokens",
    description:
      "Maintain consistent visual language with tokenized colors, spacing, and typography.",
    category: "Components",
    difficulty: "Intermediate",
    updatedAt: "2026-05-14",
    readTime: "9 min",
    popularity: 87,
    tags: ["ui", "tailwind", "design-system", "design", "app-router"],
    summary:
      "Design Tokens explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: ["Extend token system safely", "Keep dark/light parity", "Avoid hardcoded colors"],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["code-blocks", "navigation-components", "search-experience"],
    sections: [
      {
        heading: "Token layers",
        body: "Token layers Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Theme overrides",
        body: "Theme overrides Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Component consumption",
        body: "Component consumption Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d11",
    slug: "code-blocks",
    title: "Code Blocks",
    description: "Build copy-ready code snippets with language labels and readable formatting.",
    category: "Components",
    difficulty: "Intermediate",
    updatedAt: "2026-05-14",
    readTime: "8 min",
    popularity: 83,
    tags: ["ui", "tailwind", "design-system", "code", "app-router"],
    summary:
      "Code Blocks explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: ["Render stable snippets", "Support copy to clipboard", "Improve scanability"],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["navigation-components", "theme-system", "accessibility-patterns"],
    sections: [
      {
        heading: "Code block anatomy",
        body: "Code block anatomy Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Copy behavior",
        body: "Copy behavior Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Accessibility",
        body: "Accessibility Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d12",
    slug: "navigation-components",
    title: "Navigation Components",
    description: "Implement resilient docs navigation for desktop sidebar and mobile menu.",
    category: "Components",
    difficulty: "Intermediate",
    updatedAt: "2026-05-14",
    readTime: "10 min",
    popularity: 79,
    tags: ["ui", "tailwind", "design-system", "navigation", "app-router"],
    summary:
      "Navigation Components explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: ["Keep IA predictable", "Preserve keyboard support", "Avoid route-state mismatch"],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["theme-system", "empty-states", "seo-metadata"],
    sections: [
      {
        heading: "Primary navigation",
        body: "Primary navigation Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Sidebar categories",
        body: "Sidebar categories Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Active state logic",
        body: "Active state logic Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d13",
    slug: "theme-system",
    title: "Theme System",
    description: "Persist color theme and prevent hydration flicker across pages.",
    category: "Components",
    difficulty: "Advanced",
    updatedAt: "2026-05-14",
    readTime: "10 min",
    popularity: 86,
    tags: ["ui", "tailwind", "design-system", "theme", "app-router"],
    summary:
      "Theme System explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Prevent FOUC on first paint",
      "Keep state persistent",
      "Use semantic tokens end-to-end",
    ],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["empty-states", "search-experience", "content-modeling"],
    sections: [
      {
        heading: "Theme source of truth",
        body: "Theme source of truth Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Initialization script",
        body: "Initialization script Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Component token usage",
        body: "Component token usage Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d14",
    slug: "empty-states",
    title: "Empty States",
    description: "Design informative empty states for search, filters, and unsupported paths.",
    category: "Components",
    difficulty: "Beginner",
    updatedAt: "2026-05-14",
    readTime: "7 min",
    popularity: 72,
    tags: ["ui", "tailwind", "design-system", "empty", "app-router"],
    summary:
      "Empty States explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: ["Reduce dead-end UX", "Provide clear next actions", "Connect users to popular docs"],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["search-experience", "accessibility-patterns", "release-notes-workflow"],
    sections: [
      {
        heading: "When empty states appear",
        body: "When empty states appear Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Recovery actions",
        body: "Recovery actions Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Link suggestions",
        body: "Link suggestions Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d15",
    slug: "search-experience",
    title: "Search Experience",
    description: "Tune search and filtering for speed, clarity, and relevance in docs catalogs.",
    category: "Guides",
    difficulty: "Intermediate",
    updatedAt: "2026-05-14",
    readTime: "10 min",
    popularity: 91,
    tags: ["workflow", "quality", "developer-experience", "search", "app-router"],
    summary:
      "Search Experience explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Improve discoverability",
      "Support mixed intent queries",
      "Expose active filters clearly",
    ],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["accessibility-patterns", "seo-metadata", "production-build"],
    sections: [
      {
        heading: "Query matching strategy",
        body: "Query matching strategy Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Filter interactions",
        body: "Filter interactions Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Result ranking",
        body: "Result ranking Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d16",
    slug: "accessibility-patterns",
    title: "Accessibility Patterns",
    description: "Apply semantic, keyboard, and focus patterns across core documentation screens.",
    category: "Guides",
    difficulty: "Intermediate",
    updatedAt: "2026-05-14",
    readTime: "10 min",
    popularity: 89,
    tags: ["workflow", "quality", "developer-experience", "accessibility", "app-router"],
    summary:
      "Accessibility Patterns explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Ship WCAG-friendly defaults",
      "Avoid keyboard traps",
      "Keep forms and nav accessible",
    ],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["seo-metadata", "content-modeling", "pm2-deployment"],
    sections: [
      {
        heading: "Semantic landmarks",
        body: "Semantic landmarks Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Focus management",
        body: "Focus management Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Screen reader labels",
        body: "Screen reader labels Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d17",
    slug: "seo-metadata",
    title: "SEO Metadata",
    description: "Set metadata and structured routes so docs are indexable and shareable.",
    category: "Guides",
    difficulty: "Intermediate",
    updatedAt: "2026-05-14",
    readTime: "9 min",
    popularity: 85,
    tags: ["workflow", "quality", "developer-experience", "seo", "app-router"],
    summary:
      "SEO Metadata explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Generate reliable social cards",
      "Avoid duplicate indexing",
      "Keep sitemap current",
    ],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["content-modeling", "release-notes-workflow", "smoke-testing"],
    sections: [
      {
        heading: "Metadata API usage",
        body: "Metadata API usage Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Canonical and OG tags",
        body: "Canonical and OG tags Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Sitemap and robots",
        body: "Sitemap and robots Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d18",
    slug: "content-modeling",
    title: "Content Modeling",
    description: "Design a typed docs content model that scales with richer article blocks.",
    category: "Guides",
    difficulty: "Advanced",
    updatedAt: "2026-05-14",
    readTime: "11 min",
    popularity: 81,
    tags: ["workflow", "quality", "developer-experience", "content", "app-router"],
    summary:
      "Content Modeling explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Add fields without breakage",
      "Enable richer article pages",
      "Keep data model readable",
    ],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["release-notes-workflow", "production-build", "rollback-strategy"],
    sections: [
      {
        heading: "Core fields",
        body: "Core fields Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Optional enrichment fields",
        body: "Optional enrichment fields Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Rendering strategy",
        body: "Rendering strategy Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d19",
    slug: "release-notes-workflow",
    title: "Release Notes Workflow",
    description: "Capture changes in a consistent changelog format for every release.",
    category: "Guides",
    difficulty: "Beginner",
    updatedAt: "2026-05-14",
    readTime: "8 min",
    popularity: 74,
    tags: ["workflow", "quality", "developer-experience", "release", "app-router"],
    summary:
      "Release Notes Workflow explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Write useful release notes",
      "Classify changes correctly",
      "Publish confidence signals",
    ],
    callouts: [
      {
        type: "note",
        title: "Use project-local commands",
        body: "Run commands from the repository root to avoid reading stale nested directories or unrelated lockfiles.",
      },
      {
        type: "tip",
        title: "Keep checks deterministic",
        body: "Run typecheck, lint, format:check, and build in the same order before pushing to catch failures early.",
      },
    ],
    relatedSlugs: ["production-build", "pm2-deployment", "monitoring-checklist"],
    sections: [
      {
        heading: "Versioning strategy",
        body: "Versioning strategy Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Release note taxonomy",
        body: "Release note taxonomy Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Review checklist",
        body: "Review checklist Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d20",
    slug: "production-build",
    title: "Production Build",
    description: "Produce deterministic production artifacts and inspect the final output.",
    category: "Deployment",
    difficulty: "Intermediate",
    updatedAt: "2026-05-14",
    readTime: "9 min",
    popularity: 92,
    tags: ["pm2", "release", "operations", "production", "app-router"],
    summary:
      "Production Build explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: ["Generate production bundle", "Interpret build output", "Address blocking warnings"],
    callouts: [
      {
        type: "warning",
        title: "Validate runtime target",
        body: "Before restart, confirm PM2 cwd and process name so deployment changes land in the real production directory.",
      },
      {
        type: "tip",
        title: "Record smoke output",
        body: "Store endpoint status codes and timestamps in the release note to make post-release debugging faster.",
      },
    ],
    relatedSlugs: ["pm2-deployment", "smoke-testing", "quick-start"],
    sections: [
      {
        heading: "Build pipeline",
        body: "Build pipeline Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Artifact inspection",
        body: "Artifact inspection Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Failure triage",
        body: "Failure triage Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d21",
    slug: "pm2-deployment",
    title: "PM2 Deployment",
    description: "Deploy the portal with PM2 and keep runtime configuration explicit.",
    category: "Deployment",
    difficulty: "Advanced",
    updatedAt: "2026-05-14",
    readTime: "11 min",
    popularity: 93,
    tags: ["pm2", "release", "operations", "app-router"],
    summary:
      "PM2 Deployment explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Restart safely with env updates",
      "Confirm runtime cwd and port",
      "Detect regressions from logs",
    ],
    callouts: [
      {
        type: "warning",
        title: "Validate runtime target",
        body: "Before restart, confirm PM2 cwd and process name so deployment changes land in the real production directory.",
      },
      {
        type: "tip",
        title: "Record smoke output",
        body: "Store endpoint status codes and timestamps in the release note to make post-release debugging faster.",
      },
    ],
    relatedSlugs: ["smoke-testing", "rollback-strategy", "installation"],
    sections: [
      {
        heading: "PM2 process config",
        body: "PM2 process config Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Restart strategy",
        body: "Restart strategy Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Log verification",
        body: "Log verification Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d22",
    slug: "smoke-testing",
    title: "Smoke Testing",
    description:
      "Run endpoint smoke checks immediately after restart to catch release regressions.",
    category: "Deployment",
    difficulty: "Beginner",
    updatedAt: "2026-05-14",
    readTime: "8 min",
    popularity: 95,
    tags: ["pm2", "release", "operations", "smoke", "app-router"],
    summary:
      "Smoke Testing explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Verify critical routes quickly",
      "Capture clear pass/fail output",
      "Escalate with reproducible evidence",
    ],
    callouts: [
      {
        type: "warning",
        title: "Validate runtime target",
        body: "Before restart, confirm PM2 cwd and process name so deployment changes land in the real production directory.",
      },
      {
        type: "tip",
        title: "Record smoke output",
        body: "Store endpoint status codes and timestamps in the release note to make post-release debugging faster.",
      },
    ],
    relatedSlugs: ["rollback-strategy", "monitoring-checklist", "environment-variables"],
    sections: [
      {
        heading: "Endpoint matrix",
        body: "Endpoint matrix Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Expected status codes",
        body: "Expected status codes Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Post-check escalation",
        body: "Post-check escalation Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d23",
    slug: "rollback-strategy",
    title: "Rollback Strategy",
    description: "Define rollback steps for bad releases with minimum downtime and confusion.",
    category: "Deployment",
    difficulty: "Advanced",
    updatedAt: "2026-05-14",
    readTime: "10 min",
    popularity: 77,
    tags: ["pm2", "release", "operations", "rollback", "app-router"],
    summary:
      "Rollback Strategy explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: ["Revert safely under pressure", "Restore known-good SHA", "Verify restored service"],
    callouts: [
      {
        type: "warning",
        title: "Validate runtime target",
        body: "Before restart, confirm PM2 cwd and process name so deployment changes land in the real production directory.",
      },
      {
        type: "tip",
        title: "Record smoke output",
        body: "Store endpoint status codes and timestamps in the release note to make post-release debugging faster.",
      },
    ],
    relatedSlugs: ["monitoring-checklist", "quick-start", "local-development-workflow"],
    sections: [
      {
        heading: "Rollback triggers",
        body: "Rollback triggers Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Git and runtime rollback",
        body: "Git and runtime rollback Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Post-incident validation",
        body: "Post-incident validation Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
  {
    id: "d24",
    slug: "deployment-checklist",
    title: "Deployment Checklist",
    description:
      "Use a release checklist that combines build verification, restart, and smoke checks.",
    category: "Deployment",
    difficulty: "Intermediate",
    updatedAt: "2026-05-14",
    readTime: "9 min",
    popularity: 88,
    tags: ["pm2", "release", "operations", "monitoring", "app-router"],
    summary:
      "Monitoring Checklist explains practical implementation details, validation steps, and production checks used in this project.",
    prerequisites: [
      "Node.js 20+ and npm available in the shell.",
      "Repository cloned with origin remote configured.",
      "Familiarity with Next.js App Router file layout.",
    ],
    outcomes: [
      "Monitor key health indicators",
      "Track recurring errors",
      "Prepare incident handoff",
    ],
    callouts: [
      {
        type: "warning",
        title: "Validate runtime target",
        body: "Before restart, confirm PM2 cwd and process name so deployment changes land in the real production directory.",
      },
      {
        type: "tip",
        title: "Record smoke output",
        body: "Store endpoint status codes and timestamps in the release note to make post-release debugging faster.",
      },
    ],
    relatedSlugs: ["quick-start", "installation", "repository-conventions"],
    sections: [
      {
        heading: "Health signals",
        body: "Health signals Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Log review cadence",
        body: "Log review cadence Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
      {
        heading: "Alert readiness",
        body: "Alert readiness Keep commands and file paths explicit so a reviewer can reproduce the same result on a clean machine. Document edge cases, expected output, and fallback actions to reduce ambiguity during handoff.",
      },
    ],
    codeExamples: [
      {
        title: "Core command sequence",
        language: "bash",
        code: "npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build",
      },
      {
        title: "File reference",
        language: "txt",
        code: "src/app/docs/page.tsx\nsrc/components/docs/DocsExplorer.tsx\nsrc/data/docs.ts",
      },
    ],
  },
] satisfies DocItem[];
