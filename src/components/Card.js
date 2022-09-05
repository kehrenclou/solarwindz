/* --------------------------------- imports -------------------------------- */
import React from "react";

/* ------------------------------ function Card ----------------------------- */
function Card({ onCardClick,card, title, link, caption, alt }) {

function handleCardClick(){
  onCardClick(card);
}

  /* --------------------------------- return --------------------------------- */
  return (
    <section className="card">
      <li className="card__item">
        <h2 className="card__title">{title}</h2>
        <p className="card__caption">{caption}</p>
        <img onClick={handleCardClick} className="card__image" src={link} alt={alt} id ="card-image" />
      </li>
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Card;
