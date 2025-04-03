import { render } from "solid-testing-library";
import Hero from "../../components/Hero";

describe("Hero", () => {
	it("renders without crashing", () => {
		const { getByText } = render(() => <Hero />);
		expect(getByText("take quiz")).toBeDefined();
	});
});
