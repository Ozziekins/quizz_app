import { Suspense } from "react";
import ScoreContent from "./ScoreContent";

export default function ScorePage() {
	return (
		<Suspense
			fallback={
				<section className="quiz">
					<h2>Loading your score...</h2>
				</section>
			}
		>
			<ScoreContent />
		</Suspense>
	);
}
