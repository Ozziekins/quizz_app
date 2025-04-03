import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import Features from "../../components/Features";

describe("Features", () => {
	it("renders without crashing", () => {
		const { getByText } = render(() => <Features />);
		expect(
			getByText("good reasons to use this quizz app and share it."),
		).toBeDefined();
	});
});
