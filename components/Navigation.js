import React, { Fragment } from "react";

export const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <div className="container">
          <header></header>

          <nav>
            <a href="#OurStory">Our Story</a>
            <a href="#Menu">Specials</a>
            <a href="#Reviews">Reviews</a>
            <a href="#Contact">Contact</a>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
