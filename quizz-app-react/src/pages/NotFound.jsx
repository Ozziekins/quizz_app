import "../styles/NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<div className="notfound-container">
			<img
				src="https://illustrations.popsy.co/pink/crashed-error.svg"
				alt="404 - Page Not Found"
				className="notfound-image"
			/>
			<h2>Oops! Page Not Found</h2>
			<p>The page you're looking for doesn't exist or has been moved.</p>
			<button className="home-btn" onClick={() => navigate("/")}>
				Go Home
			</button>
		</div>
	);
}
