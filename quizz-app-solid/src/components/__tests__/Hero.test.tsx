import { Route, Router } from "@solidjs/router";
import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import Hero from "../../components/Hero";

describe("Hero", () => {
	it("renders without crashing", () => {
		const { getByText } = render(() => (
			<Router url="/">
				<Route path="/" component={Hero} />
			</Router>
		));
		expect(getByText(/make quizzes and take quizzes/i)).toBeDefined();
	});
});
