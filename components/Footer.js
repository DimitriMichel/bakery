import React, { Fragment } from "react";
import map from "../public/static/images/themap.jpg";

export const Footer = props => {
  return (
    <Fragment>
      <img className="map" src={map} />{" "}
      <footer id="Footer">
        <div className="container">
          <div className="footer-menu">
            <a href="#">Our Story</a>
            <a href="#">Specials</a>
            <a href="#">Reviews</a>
            <a href="#">Reservations</a>
            <a href="#">Contact</a>
          </div>
          <ul className="social-media">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="copyright">
          © 2020 Copyright
          <br />
          All Rights Reserved.
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
