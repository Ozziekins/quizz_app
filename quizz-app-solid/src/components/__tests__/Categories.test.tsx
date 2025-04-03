import type * as SolidRouter from "@solidjs/router";
import { render } from "@solidjs/testing-library";
import { describe, expect, it, vi } from "vitest";
import Categories from "../../routes/categories";

vi.mock("@solidjs/router", async () => {
	const actual = await vi.importActual<typeof SolidRouter>("@solidjs/router");
	return {
		...actual,
		useNavigate: () => vi.fn(),
	};
});

describe("Categories", () => {
	it("renders all category section", () => {
		const { getByText } = render(() => <Categories />);
		expect(getByText(/Select a Quiz Category/i)).toBeDefined();
		expect(getByText(/Choose your trivia topic!/i)).toBeDefined();
	});

	it("renders at least one category card", () => {
		const { getByText } = render(() => <Categories />);
		expect(getByText(/General Knowledge/i)).toBeDefined();
	});
});
