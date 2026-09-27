# Farhan Islam / Embedded Systems

An illustrative interactive PCB system map for Farhan Islam's portfolio. This board is a visual metaphor, not a hardware design or fabricated PCB by Farhan.

## Local development

```sh
npm ci
npm run dev
npm run build
```

The content file is `src/content.ts`. To add a project, reuse an existing named board zone (CTRL, SENS, DAQ, etc.), add an entry to `projectFacts` with its board node, scroll position (`at`), type, heading and body, and adjust the related narrative stage if needed. Project cards, detail content and jumps derive from this one list. No component JSX needs editing. New 3D hardware shapes require separate geometry work in `src/App.tsx`; the content-only path reuses the conceptual board zones rather than claiming new hardware. `docs/` is the static build for GitHub Pages; regenerate it after a build with `rm -rf docs && cp -r dist docs`.
