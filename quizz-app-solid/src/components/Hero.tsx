import { useNavigate } from "@solidjs/router";

export default function Hero() {
	const navigate = useNavigate();

	return (
		<section class="hero">
			<h1 class="hero-title">a remarkably fun quizz app</h1>
			<p class="hero-desc">make quizzes and take quizzes with others.</p>
			<div class="hero-actions">
				<button type="button" onClick={() => navigate("/quiz?random=true")}>
					take quiz
				</button>
			</div>
		</section>
	);
}
