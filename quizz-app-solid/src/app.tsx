import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/globals.css";
import "./styles/theme.css";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>Quizz App</Title>
					<Navbar />
					<main class="main">
						<Suspense>{props.children}</Suspense>
					</main>
					<Footer />
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
