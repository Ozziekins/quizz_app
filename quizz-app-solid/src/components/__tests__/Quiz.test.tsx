import { Router } from "@solidjs/router";
import { render } from "solid-testing-library";
import Quiz from "../../routes/quiz";

describe("Quiz", () => {
	it("renders without crashing", () => {
		const { getByText } = render(() => (
			<Router>
				<Quiz />
			</Router>
		));
		expect(getByText("Loading...")).toBeDefined();
	});
});
