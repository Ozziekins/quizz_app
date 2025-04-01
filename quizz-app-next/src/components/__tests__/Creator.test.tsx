import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Creator from "../Creator";

describe("Creator", () => {
	test("renders creator info and social links", () => {
		render(<Creator />);
		expect(screen.getByText(/ozziekins/i)).toBeInTheDocument();
		expect(screen.getByAltText(/ozziekins/i)).toBeInTheDocument();
		expect(screen.getByText(/software engineer/i)).toBeInTheDocument();
		expect(screen.getByText(/instagram/i)).toHaveAttribute(
			"href",
			expect.stringContaining("instagram.com"),
		);
	});
});
