import { useNavigate, useSearchParams } from "@solidjs/router";

export default function Score() {
	const [params] = useSearchParams();
	const navigate = useNavigate();

	const score = () => Number(params.score || 0);
	const total = () => Number(params.total || 0);

	return (
		<section class="score-page">
			<div class="score-container">
				<h1 class="icon">🎉</h1>
				<h2 class="total">Your total score is</h2>
				<p class="score">{score()}</p>
				<p class="score-total">
					{" "}
					{score()} correct answers out of {total()}
				</p>
				<button type="button" class="home-btn" onClick={() => navigate("/")}>
					Home
				</button>
			</div>
		</section>
	);
}
