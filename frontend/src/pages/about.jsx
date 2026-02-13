import React from "react";

function About() {
  return (
    <>
      {/* HEADER */}
      <header
        className="page-header"
        data-background="assets/images/page-header01.jpg"
      >
        <div className="container">
          <h1>About Us</h1>
          <p>WELCOME TO ETERNITY BANQUET</p>
        </div>
        <div className="scroll-down"></div>
      </header>

      {/* CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-12">
              <div className="section-title text-center">
                <h6>WELCOME TO ETERNITY BANQUET</h6>
                <h2>
                  Eternity Banquet specialises in crafting cherished memories
                </h2>
              </div>
            </div>

            <div className="col-lg-6">
              <p>
                At <strong>Eternity Banquet</strong>, our goal is to transform
                every occasion into a cherished memory. From weddings that
                sparkle with love to welcoming a new life, each event is crafted
                to be eternally memorable.
              </p>

              <p>
                Whether it’s a corporate celebration, a birthday bash, or a
                surprise decoration, your moments matter to us as much as they
                do to you.
              </p>
            </div>

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1">
              <div className="testimonial-box bottom">
                <small>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-half"></i>
                </small>

                <h4>Amazing experience for our family celebration</h4>

                <p>
                  The team made our event truly special and the attention to
                  detail was incredible.
                </p>

                <a href="/services" className="custom-button light">
                  VIEW SERVICES
                </a>
              </div>
            </div>

            <div className="col-12">
              <div className="image">
                <img
                  src="assets/images/content-image01.jpg"
                  alt="Eternity Banquet"
                />
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

export default About;
