# Quizz App – React Version

## 🧠 Project Overview

This is the **React** implementation of the Quizz App — a lightweight trivia platform with random and category-based quizzes. Built using **React Router**, **JavaScript**, and **Vitest**.

The goal is to demonstrate:
- End-to-end componentization in vanilla React
- Good testing practices with **Vitest** and **Playwright**
- Clean code with **Biome**
- Modern deployment pipelines

---

## 🛠 Tech Stack

- **React 18** – Function components, hooks, and router
- **JavaScript (ES6+)** – no TypeScript for contrast with the Next version
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
cd quizz_app/quizz-app-react
```

### Scripts
Run from inside `quizz-app-react`:

```bash
npm install           # Install dependencies
npm run dev           # Start dev server (via Vite)
npm run build         # Build production version
npm run preview       # Serve production build
npm run lint          # Run Biome linter
npm run lint:fix      # Auto-fix linter issues
npm run format        # Format files using Biome
npm run test          # Run unit tests
npm run test:watch    # Watch unit tests
```

---

## 🥪 Testing

### Unit Tests
Located in `src/components/__tests__`. Example:
- Renders Navbar and responds to clicks
- Mocks `react-router` navigation
- Asserts presence and behavior of buttons

### E2E Test
Run from the root with:
```bash
npm run e2e:react
```

- Loads homepage
- Clicks "Take Quiz"
- Waits for question to load
- Asserts quiz state before & after interaction

---

## 🛍️ Project Structure

```
quizz-app-react/
├── public/
├── src/
│   ├── components/          # Shared UI components
│   ├── pages/               # Route views
│   ├── styles/              # CSS Modules
│   └── tests/               # Tests setup
└── vite.config.js
```

---

## ⚙️ Pipeline (GitHub Actions)

Triggered on push/PR to `main`:
- Lint and format all code
- Run unit tests
- Run Playwright E2E tests
- Deploy to Vercel if all pass ✅

---

## 📬 Contact

- [o.okonicha@innopolis.university](mailto:o.okonicha@innopolis.university)

---

Built for course purposes — by Ozziekins 💡

