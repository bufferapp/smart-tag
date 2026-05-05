# Buffer Smart Tag

The landing page for the **Buffer Smart Tag** — a handmade, 3D-printed, NFC-enabled token, one for every Bufferoo attending the 2026 Team Retreat.

Tap the tag with a phone to publish, schedule, or kick off any Buffer workflow. It's a physical trigger for digital automations — built to live on your fridge, your desk, or anywhere magnetic.

## About the object

- **3D-printed body** in Black Graphite PLA with a raised, glow-in-the-dark Buffer chevron (40 × 40 × 6 mm).
- **NTAG 215 NFC chip** with 504 bytes of rewritable memory — reprogrammable from any smartphone.
- **Ferrite-shielded** so the tag reads reliably even when stuck to metal.
- **Four N52 neodymium magnets** for clean, secure mounting.
- **Hand-assembled**, one per teammate.
- **Infinitely rewritable** — point the tag at a new automation any time.

This site walks visitors through what the tag is, how the tap-to-trigger flow works, the bill of materials, and the program around handing them out at retreat.

## Developer notes

Built with Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, Radix, and Motion.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Edits to files under `src/` hot-reload automatically.

### Build for production

```bash
npm run build
npm start
```

### Project layout

- `src/app/` — Next.js App Router entry (`page.tsx`, `layout.tsx`, global styles).
- `src/components/` — Page sections (`hero`, `flow`, `video`, `specs`, `program`, `nav`, `footer`) and shared UI primitives in `ui/`.
- `src/lib/` — Shared utilities.
- `public/` — Static assets (tag renders, 3D model shots, favicon).

### Heads up

This repo uses a newer Next.js than most training data covers. Before changing routing, config, or data-fetching patterns, check the relevant guide in `node_modules/next/dist/docs/` — APIs and conventions may differ from older versions.
