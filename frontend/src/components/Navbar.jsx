import { Link } from "react-router-dom";
import "../styles/components.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/attacks">Attacks</Link>
    </nav>
  );
}

export default Navbar;
