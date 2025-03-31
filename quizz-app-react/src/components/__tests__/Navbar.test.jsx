import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import Navbar from "../Navbar";

describe("Navbar", () => {
	test("navigates correctly when clicking Explore button", () => {
		render(<Navbar />, { wrapper: BrowserRouter });

		const exploreBtn = screen.getByText(/explore/i);
		expect(exploreBtn).toBeInTheDocument();

		fireEvent.click(exploreBtn);
		expect(window.location.pathname).toBe("/categories");
	});
});
