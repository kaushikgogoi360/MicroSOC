import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">SOC Panel</h2>

      <div className="sidebar-section">
        <Link
          to="/dashboard"
          className={`sidebar-link ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
        >
          Dashboard
        </Link>

        <Link
          to="/attacks"
          className={`sidebar-link ${
            location.pathname.startsWith("/attacks") ? "active" : ""
          }`}
        >
          Attack List
        </Link>
      </div>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Navbar;
