import "../styles/Quiz.css";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function decodeHtml(html) {
	const txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
}

export default function Quiz({ random }) {
	const navigate = useNavigate();
	const { category } = useParams();
	const [questions, setQuestions] = useState([]);
	const [current, setCurrent] = useState(0);
	const [loading, setLoading] = useState(true);
	const [selected, setSelected] = useState(null);
	const [answered, setAnswered] = useState(false);
	const [params] = useSearchParams();
	const amount = params.get("amount") || 10;
	const [scoreCount, setScoreCount] = useState(0);

	useEffect(() => {
		async function fetchQuiz() {
			setLoading(true);
			const catQuery = random ? "" : `&category=${category}`;
			const res = await axios.get(
				`https://opentdb.com/api.php?amount=${amount}&type=multiple${catQuery}`,
			);
			setQuestions(res.data.results);
			setLoading(false);
		}
		fetchQuiz();
	}, [category, random, amount]);

	const handleSelect = (answer) => {
		if (!answered) {
			setSelected(answer);
			setAnswered(true);
			if (answer === questions[current].correct_answer) {
				setScoreCount((prev) => prev + 1);
			}
		}
	};

	const nextQuestion = () => {
		if (current + 1 >= questions.length) {
			navigate("/score", {
				state: { score: scoreCount, total: questions.length },
			});
		} else {
			setCurrent((prev) => prev + 1);
			setSelected(null);
			setAnswered(false);
		}
	};

	const q = questions[current];

	const answers = useMemo(() => {
		if (!q) return [];
		return [...q.incorrect_answers, q.correct_answer].sort(
			() => Math.random() - 0.5,
		);
	}, [q]);

	if (loading || !q) return <div className="quiz">Loading...</div>;

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
