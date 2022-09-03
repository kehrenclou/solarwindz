/* --------------------------------- imports -------------------------------- */
import React from "react";
import Circle from "../Circle";

/* ------------------------------ function View ----------------------------- */
function Test() {
  /* --------------------------------- return --------------------------------- */
  return (
    <section className="view view__test">
      <div className="view__test_container">
        <p className="view__test_text"> Solar and Wind Power</p>
        <p className="view__test_subtext">a global overview...</p>
        <Circle />
      </div>
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Test;
