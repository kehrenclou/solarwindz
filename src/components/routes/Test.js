/* --------------------------------- imports -------------------------------- */
import React from "react";
// import * as d3 from "d3";
// import * as input from "../../public/data.json"
// import BarChart from "../BarChart";
import data from "../../data.json";
import dataSet from "../../parsedData.json"


/* ----------------------------- function dthree ---------------------------- */
function Test() {

// const countries = dataSet.filter(data =>data.Country);
console.log(dataSet[0]);
console.log(Object.keys(dataSet));
console.log(data);

  return (
    <section>
      <div>test</div>
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Test;
