import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import Quiz from "../Quiz";

const mock = new MockAdapter(axios);

describe("Quiz", () => {
	test("loads questions and renders the first one", async () => {
		const fakeData = {
			response_code: 0,
			results: [
				{
					question: "What is 2 + 2?",
					correct_answer: "4",
					incorrect_answers: ["1", "2", "3"],
				},
			],
		};

		mock.onGet(/https:\/\/opentdb\.com\/api\.php.*/).reply(200, fakeData);

		render(
			<BrowserRouter>
				<Quiz random={true} />
			</BrowserRouter>,
		);

		await waitFor(() => {
			expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
			expect(screen.getByText(/what is 2 \+ 2\?/i)).toBeInTheDocument();
		});
	});
});
