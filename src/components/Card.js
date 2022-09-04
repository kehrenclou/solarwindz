/* --------------------------------- imports -------------------------------- */
import React from "react";

/* ------------------------------ function Card ----------------------------- */
function Card({ card, title, link, caption, alt }) {
  const transformLink = { link };
  console.log(link);
  /* --------------------------------- return --------------------------------- */
  return (
    <section>
      <li className="card">
        <h2 className="card__title">{title}</h2>
        <p className="card__caption">{caption}</p>
        <img className="card__image" src={link} alt={alt} />
      </li>
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Card;
