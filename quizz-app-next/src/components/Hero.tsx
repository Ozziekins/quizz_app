'use client';
import '../styles/Hero.css';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <section className="hero">
      <h1 className="hero-title">a remarkably fun quizz app</h1>
      <p className="hero-desc">take quizzes and challenge yourself.</p>
      <div className="hero-buttons">
        <button className="btn-primary" onClick={() => router.push('/quiz-random')}>take quiz</button>
      </div>
    </section>
  );
}
