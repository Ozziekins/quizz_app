"use client";
import { useRouter } from "next/navigation";
import "../styles/Navbar.css";

export default function Navbar() {
	const router = useRouter();

	return (
		<nav className="navbar">
			<div className="logo" onClick={() => router.push("/")}>
				QuizzApp
			</div>
			<div className="nav-buttons">
				<button
					type="button"
					className="btn explore"
					onClick={() => router.push("/categories")}
				>
					explore
				</button>
				<button
					type="button"
					className="btn take"
					onClick={() => router.push("/quiz-random")}
				>
					take quiz
				</button>
			</div>
		</nav>
	);
}
