import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Features from "../Features";

describe("Features", () => {
	test("renders all feature cards", () => {
		render(<Features />);

		expect(screen.getByText(/features/i)).toBeInTheDocument();
		expect(screen.getByText(/answer anywhere/i)).toBeInTheDocument();
		expect(screen.getByText(/challenge anytime/i)).toBeInTheDocument();
		expect(screen.getByText(/enjoy always/i)).toBeInTheDocument();
	});
});
