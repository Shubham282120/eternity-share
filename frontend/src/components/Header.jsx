import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>

      {/* Hamburger Navigation */}
      <nav className="hamburger-navigation">
        <div className="layer"></div>

        <div className="container">
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            {/* <li><Link to="/services">Services</Link></li> */}
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>

          <div className="info-box">
            <span>Follow us on Social Media</span>
            <ul className="nav-social">
              <li><a href="/" onClick={(e) => e.preventDefault()}><i className="lni lni-facebook-filled"></i></a></li>
              <li><a href="/" onClick={(e) => e.preventDefault()}><i className="lni lni-twitter-original"></i></a></li>
              <li><a href="/" onClick={(e) => e.preventDefault()}><i className="lni lni-instagram"></i></a></li>
              <li><a href="/" onClick={(e) => e.preventDefault()}><i className="lni lni-youtube"></i></a></li>
              <li><a href="/" onClick={(e) => e.preventDefault()}><i className="lni lni-pinterest"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              {/* IMAGE FROM PUBLIC FOLDER */}
              <img src="/assets/images/e-logo.png" alt="Eternity Banquet Logo" />
            </Link>
          </div>

          <div className="navbar-text">
            Booking +91 99877 28747
          </div>

          <div className="site-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              {/* <li><Link to="/services">Services</Link></li> */}
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="hamburger-menu">
            <button className="menu">
              <svg width="45" height="45" viewBox="0 0 100 100">
                <path
                  className="line line1"
                  d="M 20,29 H 80 C 80,29 94,28 94,66 94,78 90,82 85,82 80,82 75,75 75,75 L 25,25"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,71 H 80 C 80,71 94,71 94,33 94,22 90,18 85,18 80,18 75,25 75,25 L 25,75"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
