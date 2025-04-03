Quizz App – SolidJS Version
🧠 Project Overview
This is the SolidStart implementation of the Quizz App — a fast and interactive trivia platform offering random and category-based quizzes. Built with SolidJS, TypeScript, and a modern lightweight setup.

The goal is to demonstrate:

Component architecture using SolidStart

E2E testing using Playwright

Code quality with Biome

GitHub Actions for CI/CD and deployment

🛠 Tech Stack
SolidJS – Fast reactive UI library

SolidStart – App framework for routing and server rendering

TypeScript – Strongly typed modern JavaScript

Vinxi – Build and development server

Playwright – End-to-end testing

Biome – Linting, formatting, type checking

🚀 Getting Started
Prerequisites
Node.js >= 20

bash
Copy
Edit
# Clone the repo
git clone https://github.com/Ozziekins/quizz_app.git
cd quizz_app/quizz-app-solid
Scripts
bash
Copy
Edit
npm install            # Install dependencies
npm run dev            # Start development server (localhost:3001)
npm run build          # Build production version
npm run start          # Serve built app
npm run lint           # Check linting using Biome
npm run lint:fix       # Auto-fix lint issues
npm run format         # Format code with Biome
npm run test           # Run unit tests (Vitest)
🧪 Testing
End-to-End Testing (Playwright)
Run from the root directory:

bash
Copy
Edit
BASE_URL=http://localhost:3001 npm run e2e:solid
Opens homepage

Clicks "Take Quiz"

Verifies quiz question is loaded

Asserts correct UI state during interaction

Unit Tests
Located in src/components/__tests__
(You can add more test coverage using Vitest)

🧭 Project Structure
arduino
Copy
Edit
quizz-app-solid/
├── public/
├── src/
│   ├── components/        # Reusable components
│   ├── routes/            # File-based routing
│   ├── styles/            # Global + Theme styles
│   └── utils/             # Helper functions
├── app.config.ts          # Vinxi + SolidStart config
├── playwright.config.ts   # E2E config
└── vitest.config.ts       # Unit test config
⚙️ CI/CD Pipeline (GitHub Actions)
Triggered on push or PR to main:

Lint and format check with Biome

Run unit tests with Vitest

Run E2E tests with Playwright

Deploy app if all checks pass ✅

📬 Contact
o.okonicha@innopolis.university

Made for Frontend Frameworks — by Ozziekins 💡

