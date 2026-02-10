# Suggested Commands

## Running the Project
```bash
# Serve locally (required for ES modules)
cd /home/rswan/Documents/Portfolio
python3 -m http.server 8080

# Then open: http://localhost:8080/portfolio.html
```

## VS Code Launch
- Configured in `.vscode/launch.json` to launch Chrome at `http://localhost:8080`

## Utility Commands
```bash
# Check JS syntax
node --check js/main.js

# Validate projects.json
node -e "const d = require('./data/projects.json'); console.log(d.projects.length + ' projects')"

# Count lines per module
wc -l portfolio.html css/portfolio.css js/*.js data/projects.json
```

## No Build/Test/Lint Tools
This project has **no** package.json, no npm dependencies, no bundler, no test framework, and no linter configured. All code is vanilla JS served directly.

## Git
The project directory is **not** currently a git repository.
