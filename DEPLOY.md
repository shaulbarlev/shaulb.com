# Deploying shaulbarlev.com

## Why animations (and video) didn’t run

The site uses **Vite** and npm packages (`plyr`, `gsap`, `split-type`). The browser can’t resolve bare imports like `import Plyr from 'plyr'`, so **you must deploy the built output**, not the source.

- **Wrong:** Deploying the repo root (index.html, main.js, style.css, …) → script fails on the first import, animations never run.
- **Right:** Deploy the contents of **`dist/`** after running `npm run build`.

## Option 1: GitHub Actions (recommended)

1. In the repo: **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions**.
2. Push to `main` (or run the “Deploy site” workflow manually). The workflow builds and deploys `dist/`.

## Option 2: Manual deploy

```bash
npm ci
npm run build
# Upload the contents of dist/ to your host (e.g. shaulbarlev.com).
```

## Fixing 404s (me.jpg, poster, favicon, video)

Put these in **`public/`** so they are copied into `dist/` on build:

- `public/me.jpg`
- `public/poster.jpg`
- `public/favicon.ico`
- `public/vids/reel.mp4` (optional if you rely on the built asset)
- `public/vids/reel.webm` (optional)

See `public/README` for the same list.
