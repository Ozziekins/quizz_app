import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import Footer from "../../components/Footer";

describe("Footer", () => {
	it("renders without crashing", () => {
		const { getByText } = render(() => <Footer />);
		expect(getByText(/ozzie's quizz app./)).toBeDefined();
	});
});
