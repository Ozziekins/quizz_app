import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Hero from "../Hero";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
	const actual = await vi.importActual("react-router-dom");
	return {
		...actual,
		useNavigate: () => mockNavigate,
	};
});

describe("Hero", () => {
	test("navigates when 'take quiz' button is clicked", () => {
		render(<Hero />);

		const btn = screen.getByRole("button", { name: /take quiz/i });
		fireEvent.click(btn);

		expect(mockNavigate).toHaveBeenCalledWith("/quiz/random");
	});
});
