import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test, vi } from "vitest";
import Navbar from "../Navbar";

vi.mock("next/navigation", () => ({
	useRouter: () => ({ push: vi.fn() }),
}));

describe("Navbar", () => {
	test("renders logo and buttons", () => {
		render(<Navbar />);

		expect(screen.getByText(/quizzapp/i)).toBeInTheDocument();
		expect(screen.getByText(/explore/i)).toBeInTheDocument();
		expect(screen.getByText(/take quiz/i)).toBeInTheDocument();
	});
});
