# Portfolio Project Overview

## Purpose
A personal portfolio website for **Ray Swan** featuring an interactive 3D knowledge graph visualization. Projects are displayed as nodes orbiting a central "sun" using Three.js, with force-directed physics, bloom post-processing, and CSS2D labels. Users can hover, drag, click nodes to see preview cards and detailed modals. Includes About and Contact modals accessible from the navigation bar.

## Tech Stack
- **Frontend**: Vanilla HTML5/CSS3/JavaScript (ES Modules)
- **3D Engine**: Three.js v0.160.0 (loaded via CDN importmap)
  - EffectComposer, UnrealBloomPass, OrbitControls, CSS2DRenderer
- **Custom shader**: GLSL vertex/fragment shaders for the molecular cloud sun
- **Data**: Static JSON (`data/projects.json`) loaded via `fetch()`
- **No build tools**: Pure ES modules, no bundler, no npm/node dependencies
- **Serving**: Any static HTTP server (e.g., `python3 -m http.server`)

## Architecture

```
Portfolio/
  portfolio.html          (380 lines — HTML shell + importmap + About/Contact modal markup)
  css/portfolio.css       (866 lines — all styles including About/Contact modal styles)
  data/projects.json      (2,302 lines — 17 projects + facets config)
  js/
    main.js               (188 lines — orchestrator, graph building, animation loop, window globals)
    scene.js              (200 lines — Three.js scene, camera, stars, shader, meshes)
    modal.js              (287 lines — preview card + project modal + About/Contact modal functions)
    interaction.js        (147 lines — raycasting, drag, hover, highlighting)
    physics.js            (108 lines — Verlet force simulation)
    physics.worker.js     (102 lines — Web Worker alternative for physics, enabled via ?physicsWorker=1)
  images/                 (project images organized by project name)
  AboutModal.tsx          (128 lines — React/Tailwind reference design for About modal, NOT used in production)
  ContactModal.tsx        (203 lines — React/Tailwind reference design for Contact modal, NOT used in production)
  archive/                (old React/TSX components, no longer active)
```

## Module Dependency Graph
- `main.js` imports from: `scene.js`, `physics.js`, `interaction.js`, `modal.js`
- `scene.js` imports from: `three`, Three.js addons
- `interaction.js` imports from: `three`
- `physics.js` and `modal.js` have no external imports (DOM-only)
- `physics.worker.js` is standalone (loaded as a Web Worker when enabled)

## Key Features
- **3D Knowledge Graph**: Force-directed graph with Three.js, bloom post-processing
- **Project Modals**: Click nodes to see detailed project information with tabs
- **About Modal**: Ray Swan bio, cross-domain expertise, philosophy, current focus
- **Contact Modal**: Email, LinkedIn, GitHub, portfolio links with copy-to-clipboard; collaboration areas
- **Physics Worker**: Optional Web Worker for physics (URL param `physicsWorker=1`)
- **Boot Screen**: Spanish-language loading screen with animated terminal text

## Key Patterns
- Factory functions: each module exports a setup/create function receiving dependencies
- Shared mutable state: `nodes[]` and `links[]` arrays are passed by reference to modules
- Window globals: `main.js` assigns modal functions to `window.*` for inline `onclick` handlers
- Language: UI text mixes Spanish and English (boot screen in Spanish, content in English)
- TSX files at project root are reference designs only (React/Tailwind), not part of the production site
