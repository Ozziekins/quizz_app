import Confetti from 'react-confetti';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Score.css';

export default function Score() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <section className="score-page">
      <Confetti />
      <div className="score-container">
        <h2>Your total score is</h2>
        <div className="score">{score}</div>
        <p>{`${score} correct answers out of ${total}`}</p>
        <button className="home-btn" onClick={() => navigate('/')}>Home</button>
      </div>
    </section>
  );
}
