'use client';
import { useRouter } from 'next/navigation';
import '../styles/NavBar.css';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => router.push('/')}>
        QuizzApp
      </div>
      <div className="nav-buttons">
        <button className="btn explore" onClick={() => router.push('/categories')}>explore</button>
        <button className="btn take" onClick={() => router.push('/quiz-random')}>take quiz</button>
      </div>
    </nav>
  );
}
