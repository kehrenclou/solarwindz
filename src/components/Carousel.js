/* --------------------------------- imports -------------------------------- */
import React from "react";

import Card from "./Card";
import cardArray from "../utils/cardArray";

/* ------------------------------ function Carousel ----------------------------- */
function Carousel() {
  /* --------------------------------- return --------------------------------- */
  return (
    <section className="view">
      <ul className="card__list">
        {cardArray.map((card, index) => (
          <Card
            key={index}
            card={card}
            title={card.title}
            link={card.link}
            caption={card.caption}
            alt={card.title}
          />
        ))}
      </ul>
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Carousel;
