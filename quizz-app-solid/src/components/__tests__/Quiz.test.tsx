import type * as SolidRouter from "@solidjs/router";
import { render } from "@solidjs/testing-library";
import { describe, expect, it, vi } from "vitest";
import Quiz from "../../routes/quiz";

vi.mock("@solidjs/router", async () => {
	const actual = await vi.importActual<typeof SolidRouter>("@solidjs/router");
	return {
		...actual,
		useSearchParams: () => [{ category: "9" }],
		useNavigate: () => vi.fn(),
	};
});

describe("Quiz", () => {
	it("renders loading state initially", () => {
		const { getByText } = render(() => <Quiz />);
		expect(getByText(/loading/i)).toBeDefined();
	});
});
