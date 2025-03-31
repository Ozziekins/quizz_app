'use client';
import Confetti from 'react-confetti';
import { useRouter } from 'next/navigation';
import '../styles/Score.css';

interface ScoreProps {
  score: number;
  total: number;
}

export default function Score({ score, total }: ScoreProps) {
  const router = useRouter();
  return (
    <section className="score-page">
      <Confetti />
      <div className="score-container">
        <h2>Your total score is</h2>
        <div className="score">{score}</div>
        <p>{`${score} out of ${total}`}</p>
        <button className="home-btn" onClick={() => router.push('/')}>Home</button>
      </div>
    </section>
  );
}
