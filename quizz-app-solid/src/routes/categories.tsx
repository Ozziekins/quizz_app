import { useNavigate } from "@solidjs/router";

const categories = [
	{
		id: 9,
		name: "General Knowledge",
		icon: "📚",
		description: "Test your general trivia knowledge.",
	},
	{
		id: 18,
		name: "Computers",
		icon: "💻",
		description: "Geek out with computer trivia.",
	},
	{
		id: 23,
		name: "History",
		icon: "🏰",
		description: "Explore historical events and facts.",
	},
	{
		id: 17,
		name: "Science & Nature",
		icon: "🌿",
		description: "Challenge yourself with science and nature.",
	},
	{
		id: 21,
		name: "Sports",
		icon: "🏀",
		description: "Sporty trivia for enthusiasts.",
	},
	{
		id: 22,
		name: "Geography",
		icon: "🌍",
		description: "Travel the world through trivia.",
	},
	{
		id: 11,
		name: "Movies",
		icon: "🎬",
		description: "Trivia from cinema and film history.",
	},
	{
		id: 27,
		name: "Animals",
		icon: "🐾",
		description: "How well do you know wildlife?",
	},
	{
		id: 15,
		name: "Video Games",
		icon: "🎮",
		description: "Level up your gaming knowledge.",
	},
	{
		id: 12,
		name: "Music",
		icon: "🎵",
		description: "Test your rhythm and music trivia.",
	},
	{
		id: 10,
		name: "Books",
		icon: "📖",
		description: "Literary trivia for book lovers.",
	},
	{
		id: 14,
		name: "Television",
		icon: "📺",
		description: "Trivia about popular TV shows.",
	},
	{
		id: 20,
		name: "Mythology",
		icon: "🐉",
		description: "Dive into myths and legends.",
	},
	{
		id: 25,
		name: "Art",
		icon: "🎨",
		description: "Explore art history and masterpieces.",
	},
	{
		id: 26,
		name: "Celebrities",
		icon: "🌟",
		description: "Trivia about famous personalities.",
	},
	{
		id: 24,
		name: "Politics",
		icon: "🏛️",
		description: "Political trivia and world events.",
	},
	{
		id: 28,
		name: "Vehicles",
		icon: "🚗",
		description: "Trivia for automotive enthusiasts.",
	},
	{
		id: 29,
		name: "Comics",
		icon: "🦸",
		description: "Test your comic book knowledge.",
	},
	{
		id: 30,
		name: "Gadgets",
		icon: "📱",
		description: "Trivia about tech gadgets and devices.",
	},
	{
		id: 19,
		name: "Mathematics",
		icon: "📐",
		description: "For lovers of numbers and logic.",
	},
];

export default function Categories() {
	const navigate = useNavigate();

	const startQuiz = (categoryId: number) => {
		navigate(`/quiz?category=${categoryId}`);
	};

	return (
		<section class="categories">
			<h2>Select a Quiz Category</h2>
			<p class="categories-subtitle">Choose your trivia topic!</p>
			<div class="categories-container">
				{categories.map((cat) => (
					<div
						key={cat.id}
						class="category-card"
						onClick={() => startQuiz(cat.id)}
					>
						<div class="icon">{cat.icon}</div>
						<h3>{cat.name}</h3>
						<p>{cat.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
