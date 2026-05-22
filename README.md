# Maqsad — Portfolio

Single-page portfolio showcasing **Maqsad** — an Inventory Management & POS system for garment retail.

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Fix `build-manifest.json` / Turbopack errors

This happens when `.next` is deleted while `npm run dev` is still running, or when two dev servers run at once.

1. **Stop every** terminal running `npm run dev` (press `Ctrl+C`).
2. In the project folder, run:

```bash
npm run dev:clean
```

If delete still fails on Windows, close Cursor terminals, then in PowerShell:

```powershell
cd d:\Maxenius-Projects\inventory-porfolio
taskkill /F /IM node.exe
npm run dev:clean
```

Use only one dev server (port 3000).

## Build

```bash
npm run build
npm start
```

## Sections

1. **Hero** — Project intro, CTAs, live POS screenshot
2. **ERP Module Showcase** — Interactive sidebar with dynamic detail panels
3. **Feature Cards** — Barcode scanning, POS math, performance
4. **Tech Stack** — Next.js, TypeScript, Tailwind CSS
