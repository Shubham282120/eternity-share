import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
     

      {/* MAIN FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="row">

            <div className="col-lg-4">
              <h6 className="widget-title">Eternity Banquet</h6>
              <p>
                At Eternity Banquet, our goal is to transform every occasion into a
                cherished memory. From weddings that sparkle with love to the
                tender welcoming of a new life, each event is crafted to be not
                just enjoyable but eternally memorable.
              </p>
            </div>

            <div className="col-xl-3 col-lg-1"></div>

            <div className="col-xl-3 col-lg-3">
              <h6 className="widget-title">Quick Links</h6>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="col-xl-2 col-lg-4">
              <h6 className="widget-title">Contact</h6>
              <p>
                sales@eternitybanquet.com <br />
                +91 99877 28747
              </p>
            </div>

            <div className="col-12">
              <div className="bottom-bar">
                <span>© 2026 All Rights Reserved By Eternity Banquet</span>
                <ul className="footer-social">
                  <li><a href="/" onClick={(e) => e.preventDefault()}>Facebook</a></li>
                  <li><a href="/" onClick={(e) => e.preventDefault()}>Twitter</a></li>
                  <li><a href="/" onClick={(e) => e.preventDefault()}>LinkedIn</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
