import React from "react";


export const Contact = props => {
  return (
    <section id="Contact">
      <div className="container">
        <div className="map-and-contact">
          <div className="get-in-touch">
            <h5 className="comp-title">Contact</h5>
            <h2>Get In Touch</h2>
          </div>
          <div className="box">
            <div className="row">
              <div className="col-md-6">
                <h6>Address</h6>
                <div className="contact-title">Boston, Massachusetts</div>
                <h6 className="address">
                  4 S Market St
                  <br /> Boston, MA
                </h6>
                <p>
                  <strong>email: </strong>
                  <a href="mailto:contact@heavenly.com">contact@heavenly.com</a>
                </p>
              </div>
              <div className="col-md-6">
                <h6>Phone</h6>
                <div className="contact-title">(617)-867-5309</div>
                <h6>Weekend Catering Services</h6>
                <p>
                  Friday, Saturday and Sunday
                  <br />
                  Available from 12pm - 6pm
                </p>
                <br/>
                <h6>Weekday Catering Services</h6>
                <p>
                  Monday - Thursday
                  <br />
                  Available from 11am - 4pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
