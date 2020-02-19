import React from "react";
import Navigation from "./Navigation";

export const LargeQuote = props => {
  return (
    <section id="LargeQuote">
      <div className="large-quote-text">
        <h1>"Happiness is baking cookies"</h1>
        <div className="sub-text-container">
          <p>
            ...and eating them, and serving them, and talking about them, and
            reading and writing about them, and thinking about them, and sharing
            them with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LargeQuote;
