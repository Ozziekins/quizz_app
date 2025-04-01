import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test, vi } from "vitest";
import Categories from "../Categories";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
	const actual = await vi.importActual("react-router-dom");
	return {
		...actual,
		useNavigate: () => mockNavigate,
	};
});

describe("Categories", () => {
	test("renders category cards and triggers overlay on click", () => {
		render(
			<BrowserRouter>
				<Categories />
			</BrowserRouter>,
		);

		// Confirm a known category is visible
		const card = screen.getByText(/general knowledge/i);
		expect(card).toBeInTheDocument();

		// Click on category
		fireEvent.click(card);

		// Confirm overlay shows
		expect(screen.getByText(/how many questions\?/i)).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /start quiz/i }),
		).toBeInTheDocument();
	});

	test("navigates to quiz on start", () => {
		render(
			<BrowserRouter>
				<Categories />
			</BrowserRouter>,
		);

		// Click category card
		fireEvent.click(screen.getByText(/general knowledge/i));

		// Click start quiz
		fireEvent.click(screen.getByRole("button", { name: /start quiz/i }));

		// Expect navigation with correct query
		expect(mockNavigate).toHaveBeenCalledWith("/quiz/9?amount=10");
	});
});
