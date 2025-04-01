import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Creator from "../Creator";

describe("Creator", () => {
	test("renders creator section with name and social links", () => {
		render(<Creator />);

		expect(screen.getByText(/hello from the creator/i)).toBeInTheDocument();
		expect(screen.getByAltText(/ozziekins/i)).toBeInTheDocument();
		expect(screen.getByText(/ozziekins/i)).toBeInTheDocument();
		expect(screen.getByText(/software engineer/i)).toBeInTheDocument();

		expect(screen.getByText(/instagram/i)).toHaveAttribute(
			"href",
			"https://www.instagram.com/ozzie__kins",
		);
		expect(screen.getByText(/github/i)).toBeInTheDocument();
		expect(screen.getByText(/linkedin/i)).toBeInTheDocument();
	});
});
