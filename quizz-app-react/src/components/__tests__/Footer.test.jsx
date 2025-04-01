import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Footer from "../Footer";

describe("Footer", () => {
	test("renders footer text", () => {
		render(<Footer />);
		expect(screen.getByText(/© 2025 ozzie's quizz app./i)).toBeInTheDocument();
	});
});
