/* --------------------------------- imports -------------------------------- */
import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import cardArray from "../utils/cardArray";

/* ------------------------------ function Carousel ----------------------------- */
function Carousel({ onCardClick }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    SlidesToScroll: 1,
    className: "slides",
  };

  /* --------------------------------- return --------------------------------- */
  return (
    <section className="view view__carousel">
      <Slider {...settings}>
        {cardArray.map((card, index) => (
          <div key={index}>
            <Card
              onCardClick={onCardClick}
              key={index}
              card={card}
              title={card.title}
              link={card.link}
              caption={card.caption}
              alt={card.title}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Carousel;
