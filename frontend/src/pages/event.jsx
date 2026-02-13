import React from "react";
import { Link } from "react-router-dom";

function Event() {
  return (
    <>
      {/* PAGE HEADER */}
      <header
        className="page-header"
        data-background="assets/images/page-header01.jpg"
      >
        <div className="container">
          <h1> Events</h1>
          <p>Your Vision, Perfectly Executed..</p>
        </div>
        <div className="scroll-down"></div>
      </header>

      {/* EVENTS SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="row justify-content-center">

            {/* Event 1 - Wedding Planning */}
            <div className="col-lg-4 col-md-6">
              <div className="meeting-event-box">
                <figure className="reveal-effect">
                  <img src="assets/images/gallery/gallery-img3.jpeg" alt="Event 1" />
                </figure>
                <div className="content">
                  <h5 style={{ fontSize: "35px" }}>
                    <Link to="/events/wedding-planning">Wedding Planning</Link>
                  </h5>
                  <small style={{ fontSize: "18px" }}>Turn your dream wedding into a flawless reality with our bespoke planning services. Every detail reflects your unique love story.</small>
                </div>
              </div>
            </div>

            {/* Event 2 - Baby Shower */}
            <div className="col-lg-4 col-md-6">
              <div className="meeting-event-box">
                <figure className="reveal-effect">
                  <img src="assets/images/gallery/gallery-img30.jpeg" alt="Event 2" />
                </figure>
                <div className="content">
                  <h5 style={{ fontSize: "35px" }}>
                    <Link to="/events/baby-shower">Baby Shower</Link>
                  </h5>
                  <small style={{ fontSize: "18px" }}>Celebrate new beginnings with a beautifully styled baby shower filled with warmth, joy, and elegance.</small>
                </div>
              </div>
            </div>

            {/* Event 3 - Corporate Events */}
            <div className="col-lg-4 col-md-6">
              <div className="meeting-event-box">
                <figure className="reveal-effect">
                  <img src="assets/images/gallery/gallery-img10.jpeg" alt="Event 3" />
                </figure>
                <div className="content">
                  <h5 style={{ fontSize: "35px" }}>
                    <Link to="/events/corporate-events">Corporate Events</Link>
                  </h5>
                  <small style={{ fontSize: "18px" }}>From executive meetings to grand galas, we manage corporate events with precision and professionalism.</small>
                </div>
              </div>
            </div>

            {/* Event 4 - Birthday Decoration */}
            <div className="col-lg-4 col-md-6">
              <div className="meeting-event-box">
                <figure className="reveal-effect">
                  <img src="assets/images/gallery/gallery-img32.jpeg" alt="Event 4" />
                </figure>
                <div className="content">
                  <h5 style={{ fontSize: "35px" }}>
                    <Link to="/events/birthday-decoration">Birthday Decoration</Link>
                  </h5>
                  <small style={{ fontSize: "18px" }}>We design vibrant birthday celebrations that turn every milestone into a joyful and unforgettable experience.</small>
                </div>
              </div>
            </div>

            {/* Event 5 - Surprise Decoration */}
            <div className="col-lg-4 col-md-6">
              <div className="meeting-event-box">
                <figure className="reveal-effect">
                  <img src="assets/images/gallery/gallery-img39.jpeg" alt="Event 5" />
                </figure>
                <div className="content">
                  <h5 style={{ fontSize: "35px" }}>
                    <Link to="/events/surprise-decoration">Surprise Decoration</Link>
                  </h5>
                  <small style={{ fontSize: "18px" }}>Create magical surprise moments with our expertly executed decorations that leave lasting memories.</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER BAR */}
      <section
        className="content-section no-spacing"
        data-background="#d39929"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bar">
                <i className="lni lni-protection"></i>
                <h6>Luxury Venue • Best Price • Book Now</h6>
                <strong>+91 99877 28747</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Event;