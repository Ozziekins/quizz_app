import { render } from "solid-testing-library";
import Creator from "../../components/Creator";

describe("Creator", () => {
	it("renders without crashing", () => {
		const { getByText } = render(() => <Creator />);
		expect(getByText("Meet the Creator")).toBeDefined();
	});
});
