import { A } from "@solidjs/router";

export default function Hero() {
	return (
		<section class="hero">
			<h1 class="hero-title">a remarkably fun quizz app</h1>
			<p class="hero-desc">make quizzes and take quizzes with others.</p>
			<div class="hero-actions">
				<A href="/quiz?random=true">take quiz</A>
			</div>
		</section>
	);
}
