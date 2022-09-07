/* --------------------------------- imports -------------------------------- */
import React from "react";
import Carousel from "../Carousel";

/* ------------------------------ function View ----------------------------- */
function Results({ onCardClick }) {
  /* --------------------------------- return --------------------------------- */
  return (
    // <section className="view view__results">
    <section >
      <Carousel onCardClick={onCardClick} />
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Results;
