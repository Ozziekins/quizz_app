import "../styles/Quiz.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

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

	if (loading) return <div className="quiz">Loading...</div>;
	//   if (current >= questions.length) return <div className="quiz">Quiz Completed!</div>;

	const q = questions[current];
	const answers = [...q.incorrect_answers, q.correct_answer].sort(
		() => Math.random() - 0.5,
	);

	const handleSelect = (answer) => {
		if (!answered) {
			setSelected(answer);
			setAnswered(true);
			if (answer === questions[current].correct_answer) {
				setScoreCount((prev) => prev + 1);
			}
		}
	};

	const isCorrect = selected === q.correct_answer;

	return (
		<section className="quiz">
			<h2 dangerouslySetInnerHTML={{ __html: q.question }} />
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
							key={ans}
							className={`answer ${answerClass}`}
							onClick={() => handleSelect(ans)}
							dangerouslySetInnerHTML={{ __html: ans }}
							disabled={answered}
						/>
					);
				})}
			</div>
			{answered && (
				<button className="next-btn" onClick={nextQuestion}>
					Next →
				</button>
			)}
		</section>
	);
}
