/* --------------------------------- imports -------------------------------- */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import View from "./routes/View";
import Idea from "./routes/Idea";

import "../App.css";

/* ------------------------------ function App ------------------------------ */
function App() {
  /* ------------------------------- use states ------------------------------- */

  /* -------------------------------- functions ------------------------------- */

  /* --------------------------------- return --------------------------------- */
  return (
    <BrowserRouter>
      <div className="page">
        <div className="page__container">
          <Header />

          <Main />

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

/* --------------------------------- exports -------------------------------- */
export default App;
