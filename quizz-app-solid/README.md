# Quizz App – SolidJS Version

## 🧠 Project Overview

This is the **SolidJS** implementation of the Quizz App — a fast and reactive trivia platform featuring both random and category-based quizzes. Built using **SolidStart** and **Vinxi**, with full end-to-end testing and CI/CD integration.

The project demonstrates:
- Lightweight reactivity with **SolidJS**
- Routing and meta management via **SolidStart**
- Robust unit and E2E testing
- Code quality via **Biome** and TypeScript
- Modern workflows and deployment

---

## 🛠 Tech Stack

- **SolidJS + SolidStart** – reactive UI + routing/meta
- **TypeScript** – fully typed project
- **OpenTDB API** – trivia data source
- **CSS** – scoped component styles
- **Vitest** – unit testing with `@solidjs/testing-library`
- **Playwright** – E2E testing
- **Biome** – code formatting & linting
- **Vinxi** – server-side bundling

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 22
- npm or pnpm

```bash
# Clone the repo
git clone https://github.com/Ozziekins/quizz_app.git
cd quizz_app/quizz-app-solid
```

### Scripts
Run from inside `quizz-app-solid`:

```bash
npm install           # Install dependencies
npm run dev           # Start dev server on port 3001
npm run build         # Build for production
npm run start         # Preview production build
npm run preview       # Serve output via node on port 3001
npm run lint          # Run Biome linter
npm run lint:fix      # Auto-fix lint issues
npm run format        # Format files with Biome
npm run test          # Run unit tests
npm run test:watch    # Watch unit tests
```

---

## 🧪 Testing

### Unit Tests

Located in `src/components/__tests__`. Uses `@solidjs/testing-library`.

Tests cover:
- Component rendering and interaction
- Hook mocking (`useNavigate`, `useSearchParams`)
- Quiz score updates and route navigation

### E2E Test
Run from root:
```bash
npm run e2e:solid
```

- Opens homepage
- Clicks “Take Quiz” button
- Asserts question loads and answers render
- Simulates answering questions

---

## 🧭 Project Structure

```
quizz-app-solid/
├── public/
├── src/
│   ├── components/         # Shared UI components
│   ├── routes/             # Pages (SolidStart routing)
│   ├── styles/             # Global & component styles
│   ├── tests/              # Unit test setup
│   └── utils/              # Helper functions
├── .output/                # Server build output (Vinxi)
└── vite.config.ts
```

---

## ⚙️ Pipeline (GitHub Actions)

Runs on push or PR to `main`:
- Lint and format via **Biome**
- Run unit tests via **Vitest**
- Run E2E tests with **Playwright**
- Deploy to Vercel when all tests pass ✅

---

## 📬 Contact

- [o.okonicha@innopolis.university](mailto:o.okonicha@innopolis.university)

---

Crafted with ❤️ using Solid — by Ozziekins ⚡
