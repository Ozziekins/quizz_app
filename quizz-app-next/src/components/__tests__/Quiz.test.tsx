import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { describe, expect, test, vi } from "vitest";
import Quiz from "../Quiz";

const mockPush = vi.fn();
vi.mock("next/navigation", async () => {
	const actual = await vi.importActual("next/navigation");
	return {
		...actual,
		useRouter: () => ({ push: mockPush }),
	};
});

describe("Quiz", () => {
	test("loads and renders a question", async () => {
		const mock = new MockAdapter(axios);
		mock.onGet(/https:\/\/opentdb\.com\/api\.php.*/).reply(200, {
			response_code: 0,
			results: [
				{
					question: "What is 2 + 2?",
					correct_answer: "4",
					incorrect_answers: ["1", "2", "3"],
				},
			],
		});

		render(<Quiz random />);

		expect(screen.getByText(/loading/i)).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByText("What is 2 + 2?")).toBeInTheDocument();
		});
	});
});
