/* --------------------------------- imports -------------------------------- */
import React, { useState } from "react";
import BarChart from "../BarChart";
import {
  solarDataSumConst as solarDataC,
  windDataSumConst as windDataC,
} from "../../data/data";

/* ----------------------------- function Future ---------------------------- */
function Future() {
  const [powerData, setPowerData] = useState({
    labels: solarDataC.map((data) => data.Region),
    datasets: [
      {
        label: "Total MW of Solar Power in Construction",
        data: solarDataC.map((data) => data.solarcapacity),
        backgroundColor: ["orange"],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Total MW of Wind Power in Construction",
        data: windDataC.map((data) => data.windcapacity),
        backgroundColor: ["green"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  return (
    <section className="section__chart">
      <h3 className="view__content_header">
        The Future of Solar and Wind Power
      </h3>
      <p className="view__content_paragraph_chart">
        This graph shows a global summation of the estimated MW that will be
        generated upon completion of current in progress construction of new
        facilities.
      </p>
      <div style={{ width: 700 }} className="view__bonus">
        <BarChart chartData={powerData} className="chart" />
      </div>
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Future;
