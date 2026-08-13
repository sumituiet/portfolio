# Sumit — AI Engineer portfolio

A modern, responsive portfolio built with Next.js and exported as a fully static site. It includes a persistent light/dark theme, current project case studies, and a browser-only Dummy AI showcase with no API or server dependency.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## Deploy to Render

The included `render.yaml` configures a Render Static Site automatically. When configuring it manually, use:

- Build command: `npm ci && npm run build`
- Publish directory: `out`
- Node version: 20 or newer

No environment variables, server runtime, or rewrite rules are required.

## GitHub Pages

The included GitHub Actions workflow reads the repository base path from GitHub Pages and passes it into the static build automatically. This keeps images, résumé links, and Next.js assets working when the site is hosted under `/portfolio`, while Render continues to serve them from `/`.
