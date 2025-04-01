# 🎉 Quizz App Monorepo

This repository hosts two implementations of a fun trivia quiz application developed using two modern frameworks: **React (with Vite)** and **Next.js (with TypeScript)**.

## 🚀 Deployed Applications

- **React (Vite)**: [Deployed link coming soon!](#)
- **Next.js**: [Deployed link coming soon!](#)

---

## 📌 Project Description

The Quizz App is designed to provide engaging trivia quizzes across multiple categories. Users can explore quizzes randomly or select specific categories, answer questions, and receive immediate feedback, complete with scoring and visual celebrations (🎊).

---

## 📦 Repository Structure

- **`quizz-app-react/`**: React app (JavaScript, Vite)
- **`quizz-app-next/`**: Next.js app (TypeScript)

---

## 🛠️ Setup & Installation

Clone this repository:

```bash
git clone https://github.com/Ozziekins/quizz_app
cd final_project
```

Install dependencies for each app:

```bash
cd quizz-app-react && npm install
cd ../quizz-app-next && npm install
```

---

## ⚙️ GitHub Actions CI/CD Pipeline

Your pipeline (`.github/workflows/`) automatically performs:

1. **On every push or PR to main**:
   - Lint, format, typecheck
   - Run unit tests
   - Run end-to-end tests

2. **On successful checks**:
   - Deploy both apps automatically to **Vercel** or **Netlify**.

---

## 🧪 Testing Strategy

- **Unit Tests**: At least one component interaction or API fetch is tested per framework.
- **E2E Tests**: Single end-to-end test suite for both apps using Cypress, ensuring app integrity and functionality.

---

## 📖 Documentation & Resources

Detailed docs and guides exist within each app directory (`quizz-app-react/README.md` & `quizz-app-next/README.md`).

---

## 🎤 Presentation

The `[final presentation](docs/presentation.pptx)` demonstrates:
  - Motivation & vision behind the project.
  - Implementation differences between frameworks.
  - Testing and CI/CD strategy.
  - Live demo of both apps.

---

### 🚩 Repository Structure Quick-view:

```
FINAL_PROJECT/
├── quizz-app-react        # React Implementation
├── quizz-app-next         # Next.js Implementation
└── .github/workflows      # CI/CD pipelines
```

---

🎓 **Enjoy Quizzing!** 🌟