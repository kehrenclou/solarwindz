/* --------------------------------- imports -------------------------------- */
import React from "react";
import Circle from "../Circle";

/* ------------------------------ function View ----------------------------- */
function Home() {
  /* --------------------------------- return --------------------------------- */
  return (
     <section className="view view__test">
      <p className="view__test_text"> Solar and Wind Power</p>
      <p className="view__test_subtext">a global overview...</p>
      <Circle />
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Home;

