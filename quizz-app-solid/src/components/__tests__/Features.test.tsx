import { render } from "solid-testing-library";
import Features from "../../components/Features";

describe("Features", () => {
	it("renders without crashing", () => {
		const { getByText } = render(() => <Features />);
		expect(getByText("Why you'll love this app")).toBeDefined();
	});
});
