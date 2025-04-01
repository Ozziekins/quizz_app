import { expect, test } from "@playwright/test";

test("React App: navigates to random quiz and shows a question", async ({
	page,
}) => {
	await page.goto("http://localhost:5173");

	const hero = page.locator(".hero");

	// Wait for hero section to be visible
	await expect(
		hero.getByRole("heading", { name: /remarkably fun quizz app/i }),
	).toBeVisible();

	// Click the "take quiz" button in the hero section
	await hero.getByRole("button", { name: /take quiz/i }).click();

	// Wait for the quiz question to appear
	const quizHeading = page.locator(".quiz h2");
	await expect(quizHeading).toHaveCount(1, { timeout: 10000 });
});
