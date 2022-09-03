/* --------------------------------- imports -------------------------------- */
import React from "react";

import solarbar from "../../images/solarbar.jpg";
import fifty from "../../utils/fiftywords";
import Carousel from "../Carousel";

/* ------------------------------ function Test ----------------------------- */
function Test() {
  /* --------------------------------- return --------------------------------- */
  return (
    // <section className="view view__chart">
    //   <div className="chart chart__container">
    //     <div className="chart__prev"></div>
    //     <p className="chart__caption">caption</p>
    //     <img className="chart__image" src={solarbar} alt="Solar Bar Chart" />
    //     <div className="chart__next"></div>
    //   </div>
    // </section>
    // <section className="view">
    //   <div className="card">
    //     <h2 className="card__title">Top 10 Solar Producing Countries</h2>
    //     <p className="card__caption">{fifty}</p>
    //     <img
    //       className="card__image"
    //       src={solarbar}
    //       alt="Top 10 solar producing countries"
    //     />
    //   </div>
    // </section>
    <section>
      <Carousel/>
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Test;
