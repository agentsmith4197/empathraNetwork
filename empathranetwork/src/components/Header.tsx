import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}

        <Link to="/" className="logo">
          <img
            src="/logo.png"
            alt="Empathra Network Logo"
            className="logo-image"
          />

          <span className="logo-text">
            Empathra <strong>Network</strong>
          </span>
        </Link>

        {/* NAVIGATION */}

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/create-campaign">Start Campaign</Link>
        </nav>

        {/* AUTH BUTTONS */}

        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>

      </div>
    </header>
  );
};

export default Header;