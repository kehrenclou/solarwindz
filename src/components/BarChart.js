/* --------------------------------- imports -------------------------------- */
import React from "react";
import { Bar } from "react-chartjs-2";
import solarData from "../data/data";
import { Chart as ChartJS } from "chart.js/auto";
import { Title, Legend } from "chart.js";
import { getByPlaceholderText } from "@testing-library/react";

/* ---------------------------------- const --------------------------------- */

/* ----------------------------- function BarChart ---------------------------- */
function BarChart({ chartData }) {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        position: "top",
        text: "Total Solar and Wind Power in Construction Phase by Global Region",
      },
    },
  };
  return <Bar data={chartData} options={options} />;
}

/* --------------------------------- exports -------------------------------- */
export default BarChart;
