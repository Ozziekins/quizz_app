# Quizz App – Next.js Version

## 🧠 Project Overview

This is the **Next.js** implementation of the Quizz App — a lightweight trivia platform with random and category-based quizzes. Built using the modern App Router, server components, and **TypeScript**.

The goal is to demonstrate:
- End-to-end componentization using **Next 15** features
- Good testing practices with **Vitest** and **Playwright**
- Clean code with **Biome** and TypeScript
- Modern deployment pipelines

---

## 🛠 Tech Stack

- **Next.js 15** – App Router, Server Components
- **TypeScript** – Fully typed project
- **Axios** – for fetching quiz data from [OpenTDB API](https://opentdb.com)
- **CSS Modules** – locally scoped styles
- **Vitest** – unit testing framework
- **Playwright** – E2E testing and assertions
- **Biome** – linting, formatting, and code quality

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm or pnpm

```bash
# Clone the repo
git clone https://github.com/Ozziekins/quizz_app.git
cd quizz_app/quizz-app-next
```

### Scripts
Run from inside `quizz-app-next`:

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

## 🧪 Testing

### Unit Tests

Located in `src/components/__tests__`. Example:
- Renders quiz questions with mock API data
- Clicks answer options
- Asserts score changes and navigation triggers

### E2E Test
Run from the root with:
```bash
npm run e2e:next
```

- Loads homepage
- Clicks "Take Quiz"
- Waits for question to load
- Asserts quiz state before & after interaction

---

## 🧭 Project Structure

```
quizz-app-next/
├── public/
├── src/
│   ├── app/                 # App router pages
│   ├── components/          # Shared UI components
│   ├── styles/              # CSS Modules
│   ├── tests/               # Tests setup
│   └── utils/               # Helper functions
└── next.config.ts
```

---

## ⚙️ Pipeline (GitHub Actions)

Triggered on push/PR to `main`:
- Lint and format all code
- Typecheck the project
- Run unit tests
- Run Playwright E2E tests
- Deploy to Vercel if all pass ✅

---

## 📬 Contact

- [o.okonicha@innopolis.university](mailto:o.okonicha@innopolis.university)

---

Built for course purposes — by Ozziekins 💡

