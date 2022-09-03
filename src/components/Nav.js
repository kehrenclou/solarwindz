/* --------------------------------- imports -------------------------------- */
import { Link } from "react-router-dom";
/* ------------------------------ function Nav ------------------------------ */
function Nav({ onHomeClick }) {
  /* --------------------------------- return --------------------------------- */
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link to="/" className="nav__link" onClick={onHomeClick}>
            Home
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/idea" className="nav__link">
            Idea
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/analysis" className="nav__link">
            Analysis
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/results" className="nav__link">
            Results
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/about" className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/test" className="nav__link">
            Test
          </Link>
        </li>
      </ul>
    </nav>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Nav;
