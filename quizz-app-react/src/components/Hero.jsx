import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
	const navigate = useNavigate();

	return (
		<section className="hero">
			<h1 className="hero-title">a remarkably fun quizz app</h1>
			<p className="hero-desc">make quizzes and take quizzes with others.</p>
			<div className="hero-buttons">
				<button
					type="button"
					className="btn-primary"
					onClick={() => navigate("/quiz/random")}
				>
					take quiz
				</button>
			</div>
		</section>
	);
}
