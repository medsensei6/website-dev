import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <h1>MedSensei</h1>
      </Link>

      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
        <Link to="/team" onClick={() => setIsMenuOpen(false)}>Team</Link>
        <Link to="/resources" onClick={() => setIsMenuOpen(false)}>Resources</Link>
        <Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
      </div>
    </nav>
  );
}
