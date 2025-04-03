import { useNavigate, useSearchParams } from "@solidjs/router";
import { For, Show, createEffect, createSignal } from "solid-js";
import { decodeHtml } from "../utils/decodeHtml";

interface Question {
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
}

export default function Quiz() {
	const [params] = useSearchParams();
	const navigate = useNavigate();

	const [questions, setQuestions] = createSignal<Question[]>([]);
	const [current, setCurrent] = createSignal(0);
	const [loading, setLoading] = createSignal(true);
	const [selected, setSelected] = createSignal<string | null>(null);
	const [answered, setAnswered] = createSignal(false);
	const [score, setScore] = createSignal(0);
	const [shuffledAnswers, setShuffledAnswers] = createSignal<string[]>([]);
	const [hiddenAnswers, setHiddenAnswers] = createSignal<string[]>([]);
	const [hintUsed, setHintUsed] = createSignal(false); // 💡 per-question flag

	const amount = Number(params.amount || 10);
	const category = params.category;
	const isRandom = params.random === "true";

	createEffect(() => {
		const fetchQuestions = async () => {
			setLoading(true);
			const catQuery = isRandom ? "" : `&category=${category}`;
			const url = `https://opentdb.com/api.php?amount=${amount}&type=multiple${catQuery}`;
			const res = await fetch(url);
			const data = await res.json();
			setQuestions(data.results);
			setLoading(false);

			const firstQ = data.results[0];
			const shuffled = [
				...firstQ.incorrect_answers,
				firstQ.correct_answer,
			].sort(() => Math.random() - 0.5);
			setShuffledAnswers(shuffled);
			setHiddenAnswers([]);
			setHintUsed(false);
		};
		fetchQuestions();
	});

	const q = () => questions()[current()];

	createEffect(() => {
		if (!loading() && q()) {
			const answers = [...q().incorrect_answers, q().correct_answer].sort(
				() => Math.random() - 0.5,
			);
			setShuffledAnswers(answers);
			setHiddenAnswers([]);
			setHintUsed(false); // Reset on question change
		}
	});

	const handleSelect = (answer: string) => {
		if (!answered()) {
			setSelected(answer);
			setAnswered(true);
			if (answer === q().correct_answer) {
				setScore(score() + 1);
			}
		}
	};

	const nextQuestion = () => {
		const nextIndex = current() + 1;
		setSelected(null);
		setAnswered(false);

		if (nextIndex >= questions().length) {
			navigate(`/score?score=${score()}&total=${questions().length}`);
		} else {
			setCurrent(nextIndex);
			const nextQ = questions()[nextIndex];
			const shuffled = [...nextQ.incorrect_answers, nextQ.correct_answer].sort(
				() => Math.random() - 0.5,
			);
			setShuffledAnswers(shuffled);
			setHiddenAnswers([]);
			setHintUsed(false);
		}
	};

	const useHint = () => {
		if (hintUsed() || answered()) return;

		const incorrect = shuffledAnswers().filter(
			(a) => a !== q().correct_answer && !hiddenAnswers().includes(a),
		);

		const toHide = incorrect.sort(() => Math.random() - 0.5).slice(0, 2);
		setHiddenAnswers([...hiddenAnswers(), ...toHide]);
		setHintUsed(true);
	};

	return (
		<section class="quiz">
			<Show when={!loading() && q()} fallback={<div>Loading...</div>}>
				<h2>{decodeHtml(q().question)}</h2>

				<div class="answers">
					<For each={shuffledAnswers()}>
						{(ans) => {
							const isHidden = hiddenAnswers().includes(ans);

							const getClass = () => {
								if (hiddenAnswers().includes(ans)) return "answer hidden";
								if (answered()) {
									if (ans === q().correct_answer) return "answer correct";
									if (ans === selected()) return "answer incorrect";
								} else if (ans === selected()) {
									return "answer selected";
								}
								return "answer";
							};

							return (
								<button
									type="button"
									class={getClass()}
									onClick={() => handleSelect(ans)}
									disabled={answered() || isHidden}
								>
									{decodeHtml(ans)}
								</button>
							);
						}}
					</For>
				</div>

				<Show when={!hintUsed() && !answered()}>
					<button type="button" class="next-btn" onClick={useHint}>
						💡 Hint
					</button>
				</Show>

				<Show when={answered()}>
					<button type="button" class="next-btn" onClick={nextQuestion}>
						Next →
					</button>
				</Show>
			</Show>
		</section>
	);
}
