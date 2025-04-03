import { render } from "solid-testing-library";
import Navbar from "../../components/Navbar";

describe("Navbar", () => {
	it("renders without crashing", () => {
		const { getByText } = render(() => <Navbar />);
		expect(getByText("🧠 Quizz App")).toBeDefined();
	});
});
