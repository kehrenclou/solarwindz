/* --------------------------------- imports -------------------------------- */
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Introduction from "./routes/Introduction";
import Results from "./routes/Results";
import Conclusion from "./routes/Conclusion";
import About from "./routes/About";
import Test from "./routes/Test";

/* ------------------------------ function Main ----------------------------- */
function Main({ onCardClick }) {
  /* --------------------------------- return --------------------------------- */
  return (
    <main>
      <section className="section">
        <Routes basename={"/solarwindz"}>
          <Route  path="/solarwindz" element={<Home />} />
           
          <Route path="/introduction" element={<Introduction />} />
          <Route
            path="/results"
            element={<Results onCardClick={onCardClick} />}
          />
          {/* <Route path="/results" element={<Results />} /> */}
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </section>
    </main>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Main;
