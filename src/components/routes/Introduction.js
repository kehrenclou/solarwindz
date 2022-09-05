/* --------------------------------- imports -------------------------------- */
import React from "react";

/* ------------------------------ function View ----------------------------- */
function Introduction() {
  /* --------------------------------- return --------------------------------- */
  return (
    <section className="view view__introduction">
      <h2 className="view__introduction_header">Introduction</h2>
      <p className="view__introduction_paragraph">
        Krista and I decided to use two different energy datasets, the global
        solar power tracker, and the global wind power tracker, for our project.
        To make the datasets more readable I first uploaded the necessary
        libraries and then the two datasets. I then checked for null values in
        both datasets. After that I filtered the status column for both datasets
        to “Operating”, which means that the solar/wind plant is in operation.
        We filtered for this column because we wanted our three main graphs to
        only have data for active energy sources only. To make the graphs more
        readable we filtered the data by county and/or region.
      </p>
      <p>
        Our major findings were that the United States usually started to
        implement energy first but did it in a slow, consistent manner. China
        would usually be a later adopter of the energy source but usually seemed
        committed as the graphs show explosive growth usually in the fifth year
        of implementation. We see that Asia is dominant in solar and wind energy
        implementation and its not even close.
      </p>
      <p>
        In our report, we have two bar graphs that show the top 10 wind and
        solar producing countries.
      </p>
      <p>
        After those you will see two-line graphs which shows the rate of
        adoption of wind and solar production by country since 1980 and 2009.
      </p>
      <p>
        The last graph is a stacked, horizontal bar graph which displays the
        total energy production by region.
      </p>
      <p>
        Browse the graphs in the Results section.
      </p>
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Introduction;
