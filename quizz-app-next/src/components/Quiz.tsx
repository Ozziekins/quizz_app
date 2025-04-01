"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../styles/Quiz.css";
import { decodeHtml } from "@/utils/decodeHtml";

interface QuizProps {
	category?: string;
	amount?: number;
	random?: boolean;
}

interface Question {
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
}

export default function Quiz({
	category,
	amount = 10,
	random = false,
}: QuizProps) {
	const [questions, setQuestions] = useState<Question[]>([]);
	const [current, setCurrent] = useState(0);
	const [loading, setLoading] = useState(true);
	const [selected, setSelected] = useState<string | null>(null);
	const [answered, setAnswered] = useState(false);
	const [score, setScore] = useState(0);
	const router = useRouter();

	useEffect(() => {
		const fetchQuiz = async () => {
			setLoading(true);
			const catQuery = random ? "" : `&category=${category}`;
			const res = await axios.get(
				`https://opentdb.com/api.php?amount=${amount}&type=multiple${catQuery}`,
			);
			setQuestions(res.data.results);
			setLoading(false);
		};
		fetchQuiz();
	}, [category, random, amount]);

	const handleSelect = (answer: string) => {
		if (!answered) {
			setSelected(answer);
			setAnswered(true);
			if (answer === questions[current].correct_answer) {
				setScore((prev) => prev + 1);
			}
		}
	};

	const nextQuestion = () => {
		if (current + 1 >= questions.length) {
			router.push(`/score?score=${score}&total=${questions.length}`);
		} else {
			setCurrent((prev) => prev + 1);
			setSelected(null);
			setAnswered(false);
		}
	};

	if (loading) return <div className="quiz">Loading...</div>;

	const q = questions[current];
	const answers = [...q.incorrect_answers, q.correct_answer].sort(
		() => Math.random() - 0.5,
	);

	return (
		<section className="quiz">
			<h2>{decodeHtml(q.question)}</h2>
			<div className="answers">
				{answers.map((ans) => {
					let answerClass = "";
					if (answered) {
						if (ans === q.correct_answer) answerClass = "correct";
						else if (ans === selected) answerClass = "incorrect";
					} else if (selected === ans) {
						answerClass = "selected";
					}

					return (
						<button
							type="button"
							key={ans}
							className={`answer ${answerClass}`}
							onClick={() => handleSelect(ans)}
							disabled={answered}
						>
							{decodeHtml(ans)}
						</button>
					);
				})}
			</div>
			{answered && (
				<button type="button" className="next-btn" onClick={nextQuestion}>
					Next →
				</button>
			)}
		</section>
	);
}
