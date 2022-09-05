/* --------------------------------- imports -------------------------------- */
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";


/* ------------------------------ function App ------------------------------ */
function App() {
  /* ------------------------------- use states/effects ------------------------------- */
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscClose, false);
    return () => {
      document.removeEventListener("keydown", handleEscClose, false);
    };
  }, []);
  /* -------------------------------- functions ------------------------------- */
  function handleCardClick(clickedCard) {
    setSelectedCard(clickedCard);
  
  }

  function closePopup() {
    setSelectedCard(null);
  }
  /* --------------------------------- return --------------------------------- */
  return (
    <BrowserRouter>
      <div className="root">
        <div className="page">
          <div className="page__container">
            <Header />

            <Main onCardClick={handleCardClick} />

            <Footer />

            <ImagePopup card={selectedCard} onClose={closePopup} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

/* --------------------------------- exports -------------------------------- */
export default App;
