# Quizz App [NEXT]

### 🧠 Overview

This is the **Next.js** implementation of the Quizz App — using modern routing (App Router), server components, and TypeScript.

Built with:

- **Next.js 15 (App Router)**
- **TypeScript**
- **Axios** for API
- **CSS Modules**
- **Vitest** for unit tests
- **Playwright** for E2E testing

---

### 🚀 Scripts

All commands should be run from the `quizz-app-next` folder.

```bash
npm install           # Install dependencies
npm run dev           # Start dev server
npm run build         # Build production version
npm run start         # Serve production build
npm run lint          # Run Biome linter
npm run lint:fix      # Auto-fix linter issues
npm run format        # Format files using Biome
npm run typecheck     # Run TypeScript check
npm run test          # Run unit tests
npm run test:watch    # Watch unit tests
```

---

### 🧪 Unit Test Highlight

The Next.js app includes a test that:

- Renders dynamic route pages (e.g., `/quiz/[category]`)
- Mocks data fetching
- Simulates user clicks and interaction

Tests are located in `src/components/__tests__`.

---

### 🧭 Project Structure

```
quizz-app-next/
├── public/
├── src/
│   ├── app/                 # App router pages
│   ├── components/          # Shared components
│   ├── styles/              # CSS
│   └── utils/               # Helper functions
└── next.config.ts
```

---

✅ Both projects pass linting, formatting, typechecking, unit, and e2e tests.

