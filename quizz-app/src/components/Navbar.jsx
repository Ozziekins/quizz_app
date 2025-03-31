import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        QuizzApp
      </div>
      <div className="nav-buttons">
        <button className="btn explore" onClick={() => navigate('/categories')}>explore</button>
        <button className="btn take" onClick={() => navigate('/quiz/random')}>take quiz</button>
      </div>
    </nav>
  );
}
