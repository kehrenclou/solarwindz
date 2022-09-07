/* --------------------------------- imports -------------------------------- */
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Introduction from "./routes/Introduction";
import Results from "./routes/Results";
import Conclusion from "./routes/Conclusion";
import About from "./routes/About";
import Bonus from "./routes/Bonus";

/* ------------------------------ function Main ----------------------------- */
function Main({ onCardClick }) {
  /* --------------------------------- return --------------------------------- */
  return (
    <main>
      <section className="section">
        <Routes>
        
          <Route path="/" element={<Home />} />

          <Route path="/introduction" element={<Introduction />} />
          <Route
            path="/results"
            element={<Results onCardClick={onCardClick} />}
          />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="/about" element={<About />} />
          <Route path="/bonus" element={<Bonus />} />
        </Routes>
      </section>
    </main>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Main;
