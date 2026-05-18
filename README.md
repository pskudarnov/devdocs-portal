# DevDocs Portal

live demo: https://devdocs.pavel-skudarnov.ru  
repo: https://github.com/pskudarnov/devdocs-portal

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- ESLint + Prettier

## Pages

- /
- /docs
- /docs/[slug]
- /architecture
- /resources
- /status
- /changelog
- /robots.txt
- /sitemap.xml

## Features

- searchable documentation catalog
- filters by category and difficulty
- sorting (popular, recently updated, A-Z)
- article pages with callouts, related docs, and code blocks
- copyable code examples
- sidebar navigation
- On this page navigation
- changelog
- architecture/resources/status pages
- SEO metadata, robots, and sitemap
- responsive layout
- dark/light theme

## Project Structure

- src/app/\* — route entries and metadata endpoints
- src/components/\* — layout, docs, and UI components
- src/data/\* — docs and changelog datasets
- src/lib/\* — filtering and utility helpers
- src/config/\* — shared site configuration

## Local Development

```bash
npm install
npm run dev
```

## Quality Gates

```bash
npm run format:check
npm run typecheck
npm run lint
npm run build
```

If formatting fails:

```bash
npm run format
npm run format:check
```

## Deployment

PM2 process: devdocs-portal  
Port: 3240

Suggested production commands:

```bash
npm install
npm run format:check
npm run typecheck
npm run lint
npm run build
PORT=3240 pm2 restart devdocs-portal --update-env
```

## Smoke Checks

```bash
curl -I https://devdocs.pavel-skudarnov.ru/
curl -I https://devdocs.pavel-skudarnov.ru/docs
curl -I https://devdocs.pavel-skudarnov.ru/changelog
curl -I https://devdocs.pavel-skudarnov.ru/architecture
curl -I https://devdocs.pavel-skudarnov.ru/resources
curl -I https://devdocs.pavel-skudarnov.ru/status
curl -I https://devdocs.pavel-skudarnov.ru/sitemap.xml
curl -I https://devdocs.pavel-skudarnov.ru/robots.txt
```
