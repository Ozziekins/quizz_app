import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './pages/Categories';
import Quiz from './pages/Quiz';
import Score from './pages/Score';
import Features from './components/Features';
import Creator from './components/Creator';
import Footer from './components/Footer';
import NotFound from './pages/NotFound'; 

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quiz/random" element={<Quiz random />} />
        <Route path="/quiz/:category" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {isHome && <Features />}
      {isHome && <Creator />}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
