/* --------------------------------- imports -------------------------------- */
import React from "react";

/* ------------------------------ function View ----------------------------- */
function About() {
  /* --------------------------------- return --------------------------------- */
  return (
    <section className="view view__content view__content_about">
      <div className="view__content_grid">
        <h2 className="view__content_header view__content_header_grid">
          About Solar Windz
        </h2>
        <div className="view__content_grid-left">
          <h3 className="view__content_name">Will Newsome</h3>
          <p className="view__content_paragraph ">
            Hey, my name is Will, I’m currently a data science student on sprint
            7. I live in a small town right outside of Charlotte, NC. I
            currently and have been working in sales the past few years!
          </p>
        </div>
        <div className="view__content_grid-right">
          <h3 className="view__content_name">Krista Ehrenclou</h3>
          <p className="view__content_paragraph ">
            Hi, my name is Krista, I am currently a Software Engineering student
            in sprint 12. I am changing careers from a winemaker with a former
            life in Biochem research, fashion design and commercial diving in
            Lake Michigan.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- exports -------------------------------- */
export default About;
