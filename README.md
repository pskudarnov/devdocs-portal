# DevDocs — Developer Documentation Portal

live demo: http://64.188.63.171:3240  
repo: https://github.com/pskudarnov/devdocs-portal

## stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- lucide-react
- clsx
- ESLint
- Prettier

## features

- Searchable documentation index
- Filters by category and difficulty
- Sorting: popular, recently updated, A-Z
- Article pages with sections and code blocks
- Docs sidebar and On This Page navigation
- Changelog page with typed entries
- Responsive docs layout
- SEO metadata + robots + sitemap

## pages

- `/`
- `/docs`
- `/docs/[slug]`
- `/changelog`

## architecture

- `src/data/*`: docs and changelog mock datasets
- `src/lib/*`: docs filtering/helpers and shared utilities
- `src/components/*`: layout, landing, docs, and UI primitives
- `src/app/*`: routes and metadata endpoints

## mock data

- 12 docs entries with category, difficulty, sections, code examples, dates, and popularity
- changelog entries with type and bullets

## how to run

```bash
npm install
npm run dev
```

## scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`
- `npm run format`
- `npm run format:check`

## deployment notes

- PM2 process: `devdocs-portal`
- Port: `3240`
- Start command:

```bash
PORT=3240 pm2 start npm --name devdocs-portal -- start
```

## what this project demonstrates

- Documentation portal composition
- Search and filtering UX
- Article/detail page layout
- Code block rendering
- Sidebar navigation
- SEO-friendly page structure
- TypeScript data modeling
- Accessibility basics
