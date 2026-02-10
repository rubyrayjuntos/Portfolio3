# Task Completion Checklist

When completing a task on this project, verify the following:

1. **JS Syntax Check**: Run `node --check` on all modified `.js` files
2. **JSON Validity**: If `data/projects.json` was modified, validate with `node -e "require('./data/projects.json')"`
3. **Serve and Test**: Start `python3 -m http.server 8080` and open `http://localhost:8080/portfolio.html`
4. **Browser Console**: Check for runtime errors (module loading, Three.js errors, fetch failures)
5. **Visual Check**: Verify the 3D graph renders, nodes are interactive, preview/modal work

Note: No automated tests, linters, or formatters exist for this project.
