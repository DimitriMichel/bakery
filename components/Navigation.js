import React, { Fragment } from "react";

export const Navigation = () => {
  return (
    <Fragment>
      <div className="container">
        <header></header>
        <nav>
          <a href="#">Our Story</a>
          <a href="#">Specials</a>
          <a href="#">Reviews</a>
          <a href="#">Contact</a>

        </nav>
      </div>
    </Fragment>
  );
};

export default Navigation;