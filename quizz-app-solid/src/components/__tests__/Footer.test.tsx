import { render } from "solid-testing-library";
import Footer from "../../components/Footer";

describe("Footer", () => {
	it("renders without crashing", () => {
		const { getByText } = render(() => <Footer />);
		expect(getByText(/Quizz App/)).toBeDefined();
	});
});
