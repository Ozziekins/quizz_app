import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import Navbar from "../Navbar";

describe("Navbar", () => {
	test("renders logo and buttons", () => {
		render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>,
		);

		expect(screen.getByText(/quizzapp/i)).toBeInTheDocument();
		expect(screen.getByText(/explore/i)).toBeInTheDocument();
		expect(screen.getByText(/take quiz/i)).toBeInTheDocument();
	});
});
