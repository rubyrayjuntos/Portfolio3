# Style and Conventions

## JavaScript
- **Module style**: ES Modules with named exports
- **Naming**: camelCase for variables/functions, UPPER_SNAKE for constants (`COLORS`, `PHYS`, `PROJECTS_DATA`)
- **Indentation**: 4 spaces
- **Strings**: Single quotes in JS, double quotes in JSON/HTML attributes
- **No type annotations**: Plain JavaScript, no TypeScript (archive has old TSX files but they're unused)
- **No docstrings/JSDoc**: Comments are section headers using `// ---` markers
- **Function style**: Mix of arrow functions and `function` declarations
- **URL params**: Feature flags via URL search params (e.g., `?physicsWorker=1`)

## CSS
- CSS custom properties defined in `:root` (`--cyan`, `--magenta`, `--amber`)
- Class naming: kebab-case (e.g., `node-label`, `preview-tag-tech`, `modal-hero-gradient`)
- ID naming: kebab-case (e.g., `boot-screen`, `project-preview`, `info-card`, `about-modal`, `contact-modal`)
- Responsive: mobile-first with `@media` breakpoints at 640px and 768px
- Modal styles: Separate sections for About (`.about-*`) and Contact (`.contact-*`) modals

## HTML
- Inline `onclick` handlers referencing `window.*` globals
- Semantic HTML with ARIA attributes on interactive elements
- Language attribute: `lang="es"` (Spanish)
- Modals are inline in `portfolio.html` (About modal, Contact modal, project modal)
- Navigation bar with ABOUT and CONTACT buttons

## Data (projects.json)
- Each project has: `id`, `title`, `description`, `imageUrl`, `medium`, `genre[]`, `style[]`, `tech[]`, `mood`, `year`, `role`, `variant`, `status`
- Optional rich fields: `pitch`, `challenge`, `development`, `outcome`, `gallery[]`, `journey[]`, `specs[]`, `artifacts[]`, `features[]`, `achievements[]`, `excerpts`, `themesAnalysis`, `process`, `inspiration`
- HTML markup is embedded in some string values (description, journey descriptions, etc.)

## TSX Reference Files
- `AboutModal.tsx` and `ContactModal.tsx` at project root are React/Tailwind CSS reference designs
- They mirror the content in the vanilla HTML/CSS implementation but are NOT used in production
- Use Heroicons for icons, Tailwind for styling

## Task Completion
Since there are no linters, formatters, or test suites configured:
1. Validate JS syntax: `node --check js/<file>.js`
2. Validate JSON: `node -e "require('./data/projects.json')"`
3. Serve and test in browser: `python3 -m http.server 8080`
4. Check browser console for runtime errors
