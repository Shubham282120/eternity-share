import React from "react";

function Services() {
  const preventDefault = (e) => e.preventDefault();

  return (
    <>
      {/* PAGE HEADER */}
      <header
        className="page-header"
        data-background="assets/images/page-header01.jpg"
      >
        <div className="container">
          <h1>Services</h1>
        </div>
        <div className="scroll-down"></div>
      </header>

      {/* SERVICES LIST */}
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="rooms-list">

                {/* Wedding Planning */}
                <li>
                  <div className="room-box">
                    <figure className="reveal-effect wow">
                      <a href="#" onClick={preventDefault}>
                        <img
                          src="assets/images/gallery/gallery-img3.jpeg"
                          alt="Wedding Planning service"
                        />
                      </a>
                    </figure>
                    <div className="content">
                      <h3>
                        <a href="#" onClick={preventDefault}>
                          Wedding Planning
                        </a>
                      </h3>
                      <p>
                        Turn your dream wedding into a flawless reality with our
                        bespoke planning services. Every detail reflects your
                        unique love story.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Baby Shower */}
                <li>
                  <div className="room-box">
                    <figure className="reveal-effect wow">
                      <a href="#" onClick={preventDefault}>
                        <img
                          src="assets/images/gallery/gallery-img30.jpeg"
                          alt="Baby shower decoration service"
                        />
                      </a>
                    </figure>
                    <div className="content">
                      <h3>
                        <a href="#" onClick={preventDefault}>
                          Baby Shower
                        </a>
                      </h3>
                      <p>
                        Celebrate new beginnings with a beautifully styled baby
                        shower filled with warmth, joy, and elegance.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Corporate Events */}
                <li>
                  <div className="room-box">
                    <figure className="reveal-effect wow">
                      <a href="#" onClick={preventDefault}>
                        <img
                          src="assets/images/gallery/gallery-img10.jpeg"
                          alt="Corporate event management service"
                        />
                      </a>
                    </figure>
                    <div className="content">
                      <h3>
                        <a href="#" onClick={preventDefault}>
                          Corporate Events
                        </a>
                      </h3>
                      <p>
                        From executive meetings to grand galas, we manage
                        corporate events with precision and professionalism.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Birthday Decoration */}
                <li>
                  <div className="room-box">
                    <figure className="reveal-effect wow">
                      <a href="#" onClick={preventDefault}>
                        <img
                          src="assets/images/gallery/gallery-img32.jpeg"
                          alt="Birthday party decoration service"
                        />
                      </a>
                    </figure>
                    <div className="content">
                      <h3>
                        <a href="#" onClick={preventDefault}>
                          Birthday Decoration
                        </a>
                      </h3>
                      <p>
                        We design vibrant birthday celebrations that turn every
                        milestone into a joyful and unforgettable experience.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Surprise Decoration */}
                <li>
                  <div className="room-box">
                    <figure className="reveal-effect wow">
                      <a href="eventdetail.jsx" onClick={preventDefault}>
                        <img
                          src="assets/images/gallery/gallery-img39.jpeg"
                          alt="Surprise decoration service"
                        />
                      </a>
                    </figure>
                    <div className="content">
                      <h3>
                        <a href="#" onClick={preventDefault}>
                          Surprise Decoration
                        </a>
                      </h3>
                      <p>
                        Create magical surprise moments with our expertly
                        executed decorations that leave lasting memories.
                      </p>
                    </div>
                  </div>
                </li>

              </ul>
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

export default Services;
