import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Categories from "../Categories";

const mockPush = vi.fn();
vi.mock("next/navigation", async () => {
	const actual = await vi.importActual("next/navigation");
	return {
		...actual,
		useRouter: () => ({ push: mockPush }),
	};
});

describe("Categories", () => {
	test("renders and opens overlay on category click", () => {
		render(<Categories />);
		const card = screen.getByText(/general knowledge/i);
		fireEvent.click(card);
		expect(screen.getByText(/how many questions/i)).toBeInTheDocument();
	});

	test("navigates on start quiz click", () => {
		render(<Categories />);
		fireEvent.click(screen.getByText(/general knowledge/i));
		fireEvent.click(screen.getByRole("button", { name: /start quiz/i }));
		expect(mockPush).toHaveBeenCalledWith("/quiz/9?amount=10");
	});
});
