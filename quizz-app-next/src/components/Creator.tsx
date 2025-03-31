import "../styles/Creator.css";

export default function Creator() {
	return (
		<section className="creator">
			<h2>hello from the creator</h2>
			<div className="creator-card">
				<div className="img-container">
					<img src="/pink_profile_photo.jpg" alt="ozziekins" />
				</div>
				<h3>ozziekins</h3>
				<p className="role">software engineer</p>
				<div className="social-links">
					<a href="https://instagram.com/ozzie__kins">instagram</a>
					<a href="https://github.com/Ozziekins">github</a>
					<a href="https://www.linkedin.com/in/ozioma-okonicha/">linkedin</a>
				</div>
			</div>
		</section>
	);
}
