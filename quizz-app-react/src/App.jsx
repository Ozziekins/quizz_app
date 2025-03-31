import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Creator from "./components/Creator";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";

function Layout() {
	const location = useLocation();
	const isHome = location.pathname === "/";

	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/quiz/random" element={<Quiz random />} />
				<Route path="/quiz/:category" element={<Quiz />} />
				<Route path="/score" element={<Score />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			{isHome && <Features />}
			{isHome && <Creator />}
			<Footer />
		</div>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	);
}
