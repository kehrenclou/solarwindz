/* --------------------------------- imports -------------------------------- */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./routes/View";
import Idea from "./routes/Idea";
import Home from "./routes/Home";
import Analysis from "./routes/Analysis";
import Results from "./routes/Results";
import About from "./routes/About";
import Test from "./routes/Test";

/* ------------------------------ function Main ----------------------------- */
function Main() {
  return (
    <main>
      <section className="section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/idea" element={<Idea />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </section>
    </main>
  );
}

/* --------------------------------- exports -------------------------------- */
export default Main;
