import { render } from "solid-testing-library";
import Categories from "../../routes/categories";

describe("Categories", () => {
	it("renders without crashing", () => {
		const { getByText } = render(() => <Categories />);
		expect(getByText("Select a Quiz Category")).toBeDefined();
	});
});
