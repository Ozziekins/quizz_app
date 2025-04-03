import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import Creator from "../../components/Creator";

describe("Creator", () => {
	it("renders without crashing", () => {
		const { getByText } = render(() => <Creator />);
		expect(getByText(/hello from the creator/i)).toBeDefined();
	});
});
