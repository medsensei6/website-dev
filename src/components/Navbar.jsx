import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <h1>MedSensei</h1>
      </Link>
      <div className="nav-links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/team">Team</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </nav>
  );
}
