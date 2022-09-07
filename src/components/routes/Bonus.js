/* --------------------------------- imports -------------------------------- */
import React, { useState } from "react";
import BarChart from "../BarChart";
import { solarDataSumConst as solarDataC, windDataSumConst as windDataC, } from "../../data/data";

/* ----------------------------- function dthree ---------------------------- */
function Bonus() {
  const [powerData, setPowerData] = useState({
    labels: solarDataC.map((data) => data.Region),
    datasets: [
      {
        label: "Total MW of Solar Power in Construction",
        data: solarDataC.map((data) => data.solarcapacity),
        backgroundColor:["orange"],
        borderColor:"black",
        borderWidth:1,
      },
      {
        label: "Total MW of Wind Power in Construction",
        data: windDataC.map((data) => data.windcapacity),
        backgroundColor:["green"],
        borderColor:"black",
        borderWidth:1,
      },
    ],
  });

  return (
    <section className="section__chart">
      <div style={{width:700}}className="view__bonus">
        <BarChart chartData={powerData} className="chart" />
      </div>
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Bonus;
