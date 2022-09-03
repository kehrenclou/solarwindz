/* --------------------------------- imports -------------------------------- */

/* -------------------------------- function -------------------------------- */
function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text">© {currYear} SolarWindz</p>
    </footer>
  );
}

/* --------------------------------- export --------------------------------- */
export default Footer;
