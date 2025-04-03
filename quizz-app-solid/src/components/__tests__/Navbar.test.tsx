import { Route, Router } from "@solidjs/router";
import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import Navbar from "../../components/Navbar";

describe("Navbar", () => {
	it("renders without crashing", () => {
		const { getByText } = render(() => (
			<Router url="/">
				<Route path="/" component={Navbar} />
			</Router>
		));
		expect(getByText(/quizzapp/i)).toBeDefined();
	});
});
