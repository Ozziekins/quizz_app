import { A } from "@solidjs/router";

export default function Navbar() {
	return (
		<nav class="navbar">
			<A href="/" class="logo">
				QuizzApp
			</A>
			<div class="nav-buttons">
				<A href="/categories" class="btn explore">
					explore
				</A>
				<A href="/quiz?random=true" class="btn take">
					take quiz
				</A>
			</div>
		</nav>
	);
}
