/* --------------------------------- imports -------------------------------- */

import Nav from "./Nav";

/* ----------------------------- function Header ---------------------------- */
function Header({ onHomeClick }) {
  return (
    <header className="header">
      <Nav onHomeClick={onHomeClick} />
    </header>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Header;
