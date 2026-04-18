---
name: copilot-instructions
description: "Workspace instructions for Copilot: personal React website (client-side ONLY) using React Bootstrap and React Router."
---

# Workspace Instructions

Purpose: Provide quick, always-on guidance for Copilot about this project.

- **Project type:** Personal website (client-side only React app).
- **Frameworks / libs:** React, React Bootstrap, React Router.
- **Build / dev:** Uses Vite; run via `npm run dev` (see package.json).

Where to look:
- Source code: [src](src)
- Entry: [src/main.jsx](src/main.jsx#L1)

Conventions:
- This is a client-side single-page app; do not add server-side routes or API endpoints here.
- Use React Router for navigation and React Bootstrap for UI components and layout.
- Keep styles in `src/*.css` and component-local styles alongside components.

How Copilot should help:
- Prefer client-side solutions, React hooks, and component composition.
- Suggest React Bootstrap components when appropriate (forms, navbars, grid).
- For routing, recommend `react-router-dom` patterns (Routes, Route, Link, useNavigate).

Links:
- Project README: [README.md](README.md)

If you need broader instructions for tooling, testing, or CI, link to specific docs rather than embedding them here.
