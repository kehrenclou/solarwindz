/* --------------------------------- imports -------------------------------- */
import React from "react";
import Circle from "../Circle";
import lightbulb from "../../images/lbulb.jpg"



/* ------------------------------ function View ----------------------------- */
function Home() {
  /* --------------------------------- return --------------------------------- */
  return (
     <section className="view view__test">
      <p className="view__test_text"> Solar and Wind Power</p>
      <p className="view__test_subtext">a global overview...</p>
      <img className="lightbulb" src={lightbulb} alt="lightbulb"/>
      <Circle />
      
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Home;

