/* --------------------------------- imports -------------------------------- */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

/* ------------------------------ function App ------------------------------ */
function App() {
  /* ------------------------------- use states ------------------------------- */

  /* -------------------------------- functions ------------------------------- */

  /* --------------------------------- return --------------------------------- */
  return (
    <BrowserRouter>
      <div className="root">
        <div className="page">
          <div className="page__container">
            <Header />

            <Main />

            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

/* --------------------------------- exports -------------------------------- */
export default App;
