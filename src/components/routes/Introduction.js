/* --------------------------------- imports -------------------------------- */
import React from "react";

/* ------------------------------ function View ----------------------------- */
function Introduction() {
  /* --------------------------------- return --------------------------------- */
  return (
    <section className="view view__content">
      <h2 className="view__content_header">Introduction</h2>
      <p className="view__content_paragraph">
        Two different energy datasets, the global solar power tracker, and the
        global wind power tracker, were used for the project. To make the
        datasets more readable, the necessary libraries were upladed and then
        the two datasets. Then, both datasets were checked for null values.
        Next, the status column for both datasets were filtered to “Operating”,
        which means that the solar/wind plant is in operation. This column was
        chosen in order for three main graphs to display data for active energy
        sources only. To make the graphs more readable, the data was filtered by
        county and/or region.
      </p>
      <p className="view__content_paragraph">
        The major findings were that the United States usually started to
        implement energy first but did it in a slow, consistent manner. China
        would usually be a later adopter of the energy source but usually seemed
        committed as the graphs show explosive growth usually in the fifth year
        of implementation. One can see that Asia is dominant in solar and wind
        energy implementation and its not even close.
      </p>
      <p className="view__content_paragraph">
        In the results section, there are two bar graphs that show the top 10
        wind and solar producing countries.
      </p>
      <p className="view__content_paragraph">
        Next, there are two-line graphs which shows the rate of adoption of wind
        and solar production by country since 1980 and 2009.
      </p>
      <p className="view__content_paragraph">
        The last graph is a stacked, horizontal bar graph displaying total
        energy production by region.
      </p>
      <p className="view__content_paragraph">
        Browse the graphs in the Results section.
      </p>
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Introduction;
