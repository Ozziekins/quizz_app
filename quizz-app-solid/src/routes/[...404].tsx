import { A } from "@solidjs/router";

export default function NotFound() {
	return (
		<div class="not-found">
			<img
				src="https://illustrations.popsy.co/pink/crashed-error.svg"
				alt="404 - Not Found"
				class="not-found-image"
			/>
			<h2>404 – Page Not Found</h2>
			<p>Oops! Looks like you took a wrong turn on the internet. 😅</p>
			<A href="/" class="home-btn">
				← Home
			</A>
		</div>
	);
}
