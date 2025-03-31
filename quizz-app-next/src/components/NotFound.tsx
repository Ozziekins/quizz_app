import '../styles/NotFound.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <img
        src="https://illustrations.popsy.co/white/crashed-error.svg"
        alt="404 - Not Found"
        className="notfound-image"
      />
      <h2>Oops! Page Not Found</h2>
      <Link href="/" className="home-btn">Go Home</Link>
    </div>
  );
}
