import { expect, test } from "@playwright/test";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

test.describe("Quizz App E2E", () => {
	test("navigates to random quiz and shows a question", async ({ page }) => {
		await page.goto(BASE_URL);

		const hero = page.locator(".hero");

		await expect(
			hero.getByRole("heading", { name: /remarkably fun quizz app/i }),
		).toBeVisible();

		await hero.getByRole("button", { name: /take quiz/i }).click();

		const quizHeading = page.locator(".quiz h2");
		await expect(quizHeading).toHaveCount(1, { timeout: 10000 });
	});
});
