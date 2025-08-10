
# AGENTS.md

This document outlines the conventions and commands for working with this codebase.

## Build, Lint, and Test

- **Run development server:** `npm run dev`
- **Testing:** No test suite is currently configured.
- **Linting:** No linter is currently configured.

## Code Style

- **Formatting:** Use single quotes, 2-space indentation, and semicolons.
- **Imports:** Use ES6 module syntax (`import ... from ...`).
- **Naming:** Use camelCase for variables and functions.
- **Types:** This project uses TypeScript. Add type annotations where appropriate.
- **Error Handling:** Use `try...catch` blocks for async operations. Log errors and send appropriate HTTP status codes.
- **API:** The project uses Express.js. Middleware and routes should follow Express conventions.
- **Templates:** Templates are JavaScript files exporting a function that returns a template literal.
- **Dependencies:** Use `npm` to manage dependencies.
