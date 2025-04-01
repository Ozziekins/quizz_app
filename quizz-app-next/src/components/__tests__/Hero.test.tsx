import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Hero from "../Hero";

const mockPush = vi.fn();
vi.mock("next/navigation", async () => {
	const actual = await vi.importActual("next/navigation");
	return {
		...actual,
		useRouter: () => ({ push: mockPush }),
	};
});

describe("Hero", () => {
	test("navigates on take quiz click", () => {
		render(<Hero />);
		const btn = screen.getByRole("button", { name: /take quiz/i });
		fireEvent.click(btn);
		expect(mockPush).toHaveBeenCalledWith("/quiz-random");
	});
});
