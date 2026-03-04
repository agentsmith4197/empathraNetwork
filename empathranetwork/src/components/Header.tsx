import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        <h1 className="logo">
          Empathra <span>Network</span>
        </h1>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/create-campaign">Start Campaign</Link>
        </nav>

        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>

      </div>
    </header>
  );
};

export default Header;