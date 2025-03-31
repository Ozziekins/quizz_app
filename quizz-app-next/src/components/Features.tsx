import '../styles/Features.css';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureProps) => (
  <div className="feature-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="learn-more">learn more →</button>
  </div>
);

export default function Features() {
  return (
    <section className="features">
      <h2>features</h2>
      <p className="features-subtitle">good reasons to use this quizz app and share it.</p> 
      <div className="features-container">
        <FeatureCard
          icon="✨"
          title="answer anywhere"
          description="Take quizzes wherever you are: at home, commuting, or on a break."
        />
        <FeatureCard
          icon="🛸"
          title="challenge anytime"
          description="Set quizzes for others anytime. More fun with more questions."
        />
        <FeatureCard
          icon="🎉"
          title="enjoy always"
          description="A fun, intuitive interface with instant feedback."
        />
      </div>
    </section>
  );
}
