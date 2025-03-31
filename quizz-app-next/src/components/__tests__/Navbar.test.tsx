import Navbar from "@/Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { beforeEach, describe, expect, test } from "vitest";

vi.mock("next/navigation", () => ({
	useRouter: vi.fn(),
}));

describe("Navbar", () => {
	const push = vi.fn();

	beforeEach(() => {
		(useRouter as any).mockReturnValue({ push });
	});

	test("navigates correctly when clicking Explore button", () => {
		render(<Navbar />);

		const exploreBtn = screen.getByText(/explore/i);
		expect(exploreBtn).toBeInTheDocument();

		fireEvent.click(exploreBtn);
		expect(push).toHaveBeenCalledWith("/categories");
	});
});
