/* --------------------------------- imports -------------------------------- */
import { NavLink } from "react-router-dom";
/* ------------------------------ function Nav ------------------------------ */
function Nav() {
  /* --------------------------------- return --------------------------------- */
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "white",
          })}
          className="nav__link"
        >
          <li className="nav__list-item"> Home</li>
        </NavLink>

        <NavLink
          to="/introduction"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "white",
          })}
          className="nav__link"
        >
          <li className="nav__list-item">Introduction</li>
        </NavLink>

        <NavLink
          to="/results"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "white",
          })}
          className="nav__link"
        >
          <li className="nav__list-item"> Results</li>
        </NavLink>
        <NavLink
          to="/future"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "white",
          })}
          className="nav__link"
        >
          <li className="nav__list-item"> Future </li>
        </NavLink>
        <NavLink
          to="/conclusion"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "white",
          })}
          className="nav__link"
        >
          <li className="nav__list-item">Conclusion </li>
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "white",
          })}
          className="nav__link"
        >
          <li className="nav__list-item">About </li>
        </NavLink>
      </ul>
    </nav>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Nav;
