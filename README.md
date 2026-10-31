# 晴天的海洋 · Sunny Ocean

Fullscreen WebGL2 ocean scene for a bright, clear day: blue sky, strong sun glitter, and calm-to-moderate waves. Drag to orbit the camera.

**Live demo:** [https://ltmtms.github.io/sunny-ocean/](https://ltmtms.github.io/sunny-ocean/)

## Credits & license

This project adapts **[Ultra-Water](https://github.com/Humpalumps/Ultra-Water)** by Humpalumps — a real-time FFT ocean renderer for three.js (shore breakers, foam, caustics, underwater rendering, and more). Ultra-Water is released under the **[MIT License](LICENSE)**. See also [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

Changes here focus on default atmosphere (high sun, light clouds, tropical water, stronger glints) and a minimal presentation for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (default port **4317**). Add `?gui` or `?settings` to open the tuning panel, or `?debug` / `?perf` to show the FPS overlay.

## Build & deploy

```bash
npm run build
```

Production builds use Vite `base: /sunny-ocean/` for GitHub Pages. Pushes to `main` deploy via [GitHub Actions](.github/workflows/deploy-pages.yml).

## Requirements

WebGL2-capable browser (Chrome, Edge, Firefox, Safari recent versions).
