import React, { useEffect, useRef, useState } from "react";
import NewsletterForm from "../components/NewsletterForm";
import { Link } from "react-router-dom";



function Index() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [cardsCount, setCardsCount] = useState(2);

  // Helper to get width, similar to your slideWidth()
  const getSlideWidth = () => {
    if (!trackRef.current) return 0;
    // Assuming 40px gap between cards as per your code
    return trackRef.current.children[0].offsetWidth + 40;
  };

  // Update slide function
  const updateSlide = () => {
    console.log('Updating slide to index:')
    if (trackRef.current) {
      const newTranslateX = -index * getSlideWidth();
      trackRef.current.style.transform = `translateX(${newTranslateX}px)`;
    }
  };

  // Handle Resize and Initial Setup
  useEffect(() => {
    console.log(index)
    if (trackRef.current) {
      setCardsCount(trackRef.current.children.length);
    }

    const handleResize = () => {
      updateSlide();
    };

    window.addEventListener('resize', handleResize);
    // Initial call to set position
    updateSlide();

    return () => window.removeEventListener('resize', handleResize);
  }, [index]); // Re-run effect when index changes

  const nextSlide = () => {
    // Logic: if (index < cards.length - 2)
    console.log(cardsCount); // Replaced alert with console.log
    if (index < cardsCount - 2) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    console.log('hello'); // Replaced alert with console.log
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };


  return (
    <>


      {/*  {/* end hamburger-navigation   */}

      {/*  {/* end navbar  */}
      <header className="slider">
        <div className="main-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slide-inner" data-background="assets/images/slide01.jpg">
                <div className="container">
                  <h6 data-swiper-parallax="100">Weddings | Birthdays | Corporate Events</h6>
                  <h1 data-swiper-parallax="200"> Create Your Perfect Day</h1>
                  <a href="/contact" data-swiper-parallax="200">Book Your Date</a>
                </div>
                {/*  {/* end container  */}
              </div>
              {/*  {/* end slide-inner  */}
            </div>
            {/*  {/* end swiper-slide  */}
            <div className="swiper-slide">
              <div className="slide-inner" data-background="assets/images/slide02.jpg">
                <div className="container">
                  <h6 data-swiper-parallax="100">Beautifully themed Baby Showers and intimate gatherings.</h6>
                  <h1 data-swiper-parallax="200"> Celebrate New Beginnings</h1>
                  <a href="/contact" data-swiper-parallax="200">Book Your Date</a>
                </div>
                {/* end container  */}
              </div>
              {/* end slide-inner  */}
            </div>
            {/* end swiper-slide  */}
            <div className="swiper-slide">
              <div className="slide-inner" data-background="assets/images/slide03.jpg">
                <div className="container">
                  <h6 data-swiper-parallax="100"> Crafting the wedding of your dreams.</h6>
                  <h1 data-swiper-parallax="200">Happily Ever After Starts Here </h1>
                  <a href="/contact" data-swiper-parallax="200">Book Your Date</a>
                </div>
                {/* end container  */}
              </div>
              {/* end slide-inner  */}
            </div>
            {/* end swiper-slide  */}
          </div>
          {/* end swiper-wrapper  */}
          <div className="slider-prev"></div>
          {/* end slider-prev  */}
          <div className="slider-next"></div>
          {/* end slider-next  */}
          <div className="slider-fraction"></div>
          {/* end slider-fraction  */}
        </div>
        {/* end main-slider  */}
        <div className="scroll-down"></div>
        {/* end scroll-down  */}
      </header>
      {/* end slider  */}
      {/* <section className="content-section no-spacing">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="hotel-search">
			  <h6>ROOM SEARCH</h6>
            <form action="https://www.booking.com/searchresults.en-gb.html">
              <div className="form-group">
                <label>Which Quardo </label>
                <select>
                  <option>Select Hotel Location</option>
                  <option>Kiev - Ukraine</option>
                  <option>Sao Paulo - Brazil</option>
                  <option>Istanbul -  Turkey</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date Check-In </label>
                <input type="text" placeholder="Check-In" data-toggle="datepicker" className="date">
                <i className="lni lni-calendar"></i> </div>
              <div className="form-group">
                <label>Date Check-Out</label>
                <input type="text" placeholder="Check-Out" data-toggle="datepicker" className="date">
                <i className="lni lni-calendar"></i> </div>
              <div className="form-group">
                <label>Person </label>
                <input type="number" value="1">
              </div>
              <div className="form-group">
                <label>&nbsp; </label>
                <input type="submit" value="FIND NOW !">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>  */}
      {/* end content-section  */}
      {/* <section className="content-section no-spacing" data-background="#f5f3ec">
    <div className="container">
      <div className="row no-gutters align-items-center">
        <div className="col-lg-6">
          <div className="side-content text-center">
            <h6>WELCOME TO PRIDE OF HOTELS</h6>
            <h2 className="line">Discover Britain’s 
              leading luxury and 
              boutique hotel. </h2>
            <a href="special-offers.html" className="custom-button">EXPLORE WITH US</a> </div>
        </div>
        <div className="col-lg-6">
          <figure className="side-image right-full overlap-bottom reveal-effect"><img src="images/side-image01.jpg" alt="Image" > <a href="videos/video01.mp4" className="video-button" data-fancybox data-width="640" data-height="360" ><i className="lni lni-play"></i></a> </figure>
        </div>
      </div>
    </div>
  </section>  */}
      {/* <section className="content-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h6>AN EXTRAORDINARY COUNTRY</h6>
            <h2>From the Scottish Highlands <br>
              to the Cornish Coast </h2>
          </div>
        </div>
        <div className="col-12">
          <div className="carousel-image-box">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <figure className="reveal-effect"> <img src="images/carousel-location01.jpg" alt="Image">
                  <figcaption>
                    <h5>LONDON</h5>
                    <p>237 rooms are available.<br>
                      16 meeting & events</p>
                  </figcaption>
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="reveal-effect"> <img src="images/carousel-location02.jpg" alt="Image">
                  <figcaption>
                    <h5>AMSTERDAM</h5>
                    <p>100 rooms are available.<br>
                      11 meeting & events</p>
                  </figcaption>
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="reveal-effect"> <img src="images/carousel-location03.jpg" alt="Image">
                  <figcaption>
                    <h5>BUDAPEST</h5>
                    <p>68 rooms are available.<br>
                      10 meeting & events</p>
                  </figcaption>
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="reveal-effect"> <img src="images/carousel-location04.jpg" alt="Image">
                  <figcaption>
                    <h5>VENICE</h5>
                    <p>184 rooms are available.<br>
                      44 meeting & events</p>
                  </figcaption>
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="reveal-effect"> <img src="images/carousel-location05.jpg" alt="Image">
                  <figcaption>
                    <h5>NEW YORK</h5>
                    <p>127 rooms are available.<br>
                      26 meeting & events</p>
                  </figcaption>
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="reveal-effect"> <img src="images/carousel-location06.jpg" alt="Image">
                  <figcaption>
                    <h5>FRANCE</h5>
                    <p>95 rooms are available.<br>
                      8 meeting & events</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  </section>  */}
      {/* end content-section  */}
      {/* <section className="content-section no-spacing">
    <div className="container">
      <div className="row no-gutters align-items-center">
        <div className="col-12">
          <div className="section-title text-center">
            <h6>LUXURY PREMIUM HOTELS</h6>
            <h2>Quardo Hotels in UK</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <figure className="side-image left-align reveal-effect"><img src="images/side-image02.jpg" alt="Image"></figure>
        </div>
        <div className="col-lg-6">
          <div className="side-hotel-box right">
            <div className="review"><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star-filled"></i><i className="lni lni-star"></i><span>3,674 reviews</span></div>
            <h2>Homewood Suites by <br>
              Quardo New York </h2>
            <p>#1 Best Value in New York City that matches your filters</p>
            <div className="info-box"> <span>4 offers available, <br>
              1 to 7 nights</span> <b><small>per night</small>$77</b> </div>
            <a href="room-detail.html" className="custom-button">VIEW & BOOK</a>
            <div className="availability"><i className="lni lni-checkmark"></i> Instant Availability</div>
          </div>
        </div>
      </div>
    </div>
  </section>  */}
      {/* end content-section  */}
      <section className="content-section">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>

            <div className="col-12">
              <div className="section-title text-center">
                <h6>What We Do Best</h6>
                <h2>
                  Your Vision, Perfectly <br /> Executed..
                </h2>
              </div>
            </div>

            {/* 1 - Wedding Planning */}
            <div className="col-md-4">
              <div className="recent-news">
                <figure
                  className="reveal-effect"
                  style={{ height: "450px", overflow: "hidden" }}
                >
                  <img
                    src="assets/images/gallery/gallery-img3.jpeg"
                    alt="Wedding Planning"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </figure>

                <div className="content">
                  <ul>
                    <li>
                      <Link to="/weddingplanning">Wedding Planning</Link>
                    </li>
                  </ul>

                  <h2>
                    <Link to="/weddingplanning">
                      Turn your dream wedding into a flawless reality with our
                      bespoke planning services. We curate every detail to reflect
                      your unique love story, ensuring an eternally memorable
                      celebration.
                    </Link>
                  </h2>
                </div>
              </div>
            </div>

            {/* 2 - Baby Shower */}
            <div className="col-md-4">
              <div className="recent-news">
                <figure
                  className="reveal-effect"
                  style={{ height: "450px", overflow: "hidden" }}
                >
                  <img
                    src="assets/images/gallery/gallery-img30.jpeg"
                    alt="Baby Shower"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </figure>

                <div className="content">
                  <ul>
                    <li>
                      <Link to="/babyshower">Baby Shower</Link>
                    </li>
                  </ul>

                  <h2>
                    <Link to="/babyshower">
                      Welcome the newest addition to your family with a heartwarming
                      and beautifully styled celebration. We craft an atmosphere of
                      pure joy and elegance to honor this precious beginning.
                    </Link>
                  </h2>
                </div>
              </div>
            </div>

            {/* 3 - Corporate Events */}
            <div className="col-md-4">
              <div className="recent-news">
                <figure
                  className="reveal-effect"
                  style={{ height: "450px", overflow: "hidden" }}
                >
                  <img
                    src="assets/images/gallery/gallery-img10.jpeg"
                    alt="Corporate Events"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </figure>

                <div className="content">
                  <ul>
                    <li>
                      <Link to="/corporateevents">Corporate Events</Link>
                    </li>
                  </ul>

                  <h2>
                    <Link to="/corporateevents">
                      Elevate your brand with seamless, professionally managed
                      corporate gatherings. From executive meetings to grand galas,
                      we execute with precision to ensure your business makes a
                      powerful impact.
                    </Link>
                  </h2>
                </div>
              </div>
            </div>

            {/* 4 - Birthday Decoration */}
            <div className="col-md-4">
              <div className="recent-news">
                <figure
                  className="reveal-effect"
                  style={{ height: "450px", overflow: "hidden" }}
                >
                  <img
                    src="assets/images/gallery/gallery-img32.jpeg"
                    alt="Birthday Decoration"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </figure>

                <div className="content">
                  <ul>
                    <li>
                      <Link to="/birthdaydecoration">Birthday Decoration</Link>
                    </li>
                  </ul>

                  <h2>
                    <Link to="/birthdaydecoration">
                      From first milestones to golden years, we design vibrant and
                      stylish birthday experiences. Let us transform your venue into
                      a festive masterpiece that makes the occasion truly shine.
                    </Link>
                  </h2>
                </div>
              </div>
            </div>

            {/* 5 - Surprise Decoration */}
            <div className="col-md-4">
              <div className="recent-news">
                <figure
                  className="reveal-effect"
                  style={{ height: "450px", overflow: "hidden" }}
                >
                  <img
                    src="assets/images/gallery/gallery-img39.jpeg"
                    alt="Surprise Decoration"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </figure>

                <div className="content">
                  <ul>
                    <li>
                      <Link to="/surprisedecoration">Surprise Decoration</Link>
                    </li>
                  </ul>

                  <h2>
                    <Link to="/surprisedecoration">
                      Create a breathtaking moment of delight with our creative and
                      expertly executed surprise setups. We handle the magic and
                      logistics, ensuring a reaction that you will cherish forever.
                    </Link>
                  </h2>
                </div>
              </div>
            </div>

            {/* View All Button */}
            <div className="col-12 spacing-50"></div>
            <div className="col-12 text-center">
              <Link to="/services" className="custom-button">
                VIEW ALL
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* end content-section  */}
      <section className="content-section no-spacing" data-background="#f5f3ec">
        <div className="container">
          <div className="row no-gutters align-items-center">
            <div className="col-lg-6">
              <div className="side-content light text-left">
                <h6>WELCOME TO ETERNITY BANQUET</h6>
                <h2>Ready to host the event of your dreams?</h2>
                <p>We understand that the best memories are made when you are stress-free. Unlike standard halls, Eternity
                  Banquet offers a full-service experience where every detail is managed with care. Your only job is to
                  celebrate; our job is to make it unforgettable.</p>
                <a href="/about" className="custom-button">Know More</a>
              </div>
              {/* end side-content  */}
            </div>
            {/* end col-6  */}
            <div className="col-lg-6">
              <figure className="side-image right-align overlap-top reveal-effect"><img src="assets/images/side-image03.jpg"
                alt="Image" /></figure>
            </div>
            {/* end col-6  */}
          </div>
          {/* end row  */}
        </div>
        {/* end container  */}
      </section>
      {/* end content-section  */}
      {/* <section className="content-section" data-background="#141414">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title light">
              <h6>PLAN YOUR EVENTS & MEETINGS</h6>
              <h2>Free changes and cancellations <br>
                for new reservations. </h2>
            </div>
          </div>
          <div className="col-12">
            <div className="events-tab">
              <ul className="tab-nav">
                <li className="active"><a href="#tab01">All Events <span>(8)</span> </a></li>
                <li><a href="#tab02">Conferences <span>(3)</span></a></li>
                <li><a href="#tab03">Awards <span>(3)</span> </a></li>
                <li><a href="#tab04">Exhibitions <span>(2)</span></a></li>
              </ul>
              <div id="tab01" className="tab-item active-item">
                <div className="carousel-events-box">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <figure className="reveal-effect"> <img src="images/carousel-event01.jpg" alt="Image"> </figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <figure className="reveal-effect"><img src="images/carousel-event02.jpg" alt="Image"></figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">Envato LLC Marketing <br>
                            & PR Summit</a></h5>
                        <span>10 Nov 2020</span> <small>Quardo Hotel, Melbourne</small>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <figure className="reveal-effect"><img src="images/carousel-event03.jpg" alt="Image"></figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">3rd Natro Hosting <br>
                            & Summit</a></h5>
                        <span>30 Aug 2020</span> <small>Quardo Hotel, Istanbul</small>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <figure className="reveal-effect"><img src="images/carousel-event04.jpg" alt="Image"></figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">Big Bitcoin Technology <br>
                            & Summit</a></h5>
                        <span>13 Mar 2020</span> <small>Quardo Hotel, Paris</small>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-prev"></div>
                  <div className="swiper-next"></div>
                </div>
              </div>
              <div id="tab02" className="tab-item">
                <div className="carousel-events-box">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <figure className="reveal-effect"><img src="images/carousel-event04.jpg" alt="Image"></figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <figure className="reveal-effect"> <img src="images/carousel-event05.jpg" alt="Image"> </figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <figure className="reveal-effect"><img src="images/carousel-event06.jpg" alt="Image"></figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <figure className="reveal-effect"><img src="images/carousel-event07.jpg" alt="Image"></figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-prev"></div>
                  <div className="swiper-next"></div>
                </div>
              </div>
              <div id="tab03" className="tab-item">
                <div className="carousel-events-box">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <figure className="reveal-effect"> <img src="images/carousel-event08.jpg" alt="Image"> </figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <figure className="reveal-effect"><img src="images/carousel-event07.jpg" alt="Image"></figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <figure className="reveal-effect"><img src="images/carousel-event06.jpg" alt="Image"></figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <figure className="reveal-effect"><img src="images/carousel-event05.jpg" alt="Image"></figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-prev"></div>
                  <div className="swiper-next"></div>
                </div>
              </div>
              <div id="tab04" className="tab-item">
                <div className="carousel-events-box">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <figure className="reveal-effect"> <img src="images/carousel-event04.jpg" alt="Image"> </figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <figure className="reveal-effect"><img src="images/carousel-event08.jpg" alt="Image"></figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <figure className="reveal-effect"><img src="images/carousel-event06.jpg" alt="Image"></figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <figure className="reveal-effect"><img src="images/carousel-event01.jpg" alt="Image"></figure>
                      <div className="content">
                        <h5><a href="meetings-events-detail.html">The Caterer Marketing <br>
                            & PR Summit</a></h5>
                        <span>07 Oct 2020</span> <small>Quardo Hotel, London</small>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-prev"></div>
                  <div className="swiper-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  */}
      {/* end content-section  */}
      {/* <section className="content-section no-spacing">


    <div className="rooms-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide" data-background="images/room-gallery01.jpg">
          <div className="room-detail">
            <div className="price-line"><span>STAY FROM</span> $60.00</div>
            <h3><a href="room-detail.html">Deluxe Room</a></h3>
            <div className="reviews">925 guest reviews <span>8.0</span></div>
          </div>
        </div>
        <div className="swiper-slide" data-background="images/room-gallery02.jpg">
          <div className="room-detail">
            <div className="price-line"><span>STAY FROM</span> $60.00</div>
            <h3><a href="room-detail.html">Deluxe Room</a></h3>
            <div className="reviews">925 guest reviews <span>8.0</span></div>
          </div>
        </div>
        <div className="swiper-slide" data-background="images/room-gallery03.jpg">
          <div className="room-detail">
            <div className="price-line"><span>STAY FROM</span> $60.00</div>
            <h3><a href="room-detail.html">Deluxe Room</a></h3>
            <div className="reviews">925 guest reviews <span>8.0</span></div>
          </div>
        </div>
        <div className="swiper-slide" data-background="images/room-gallery04.jpg">
          <div className="room-detail">
            <div className="price-line"><span>STAY FROM</span> $60.00</div>
            <h3><a href="room-detail.html">Deluxe Room</a></h3>
            <div className="reviews">925 guest reviews <span>8.0</span></div>
          </div>
        </div>
        <div className="swiper-slide" data-background="images/room-gallery05.jpg">
          <div className="room-detail">
            <div className="price-line"><span>STAY FROM</span> $60.00</div>
            <h3><a href="room-detail.html">Deluxe Room</a></h3>
            <div className="reviews">925 guest reviews <span>8.0</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>  */}

      {/* <section className="content-section no-spacing" data-background="#f5f3ec">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-7">
            <figure className="side-gallery">
              <div className="reveal-effect"><img src="images/side-gallery01.jpg" alt="Image"></div>
              <div className="reveal-effect"><img src="images/side-gallery02.jpg" alt="Image"></div>
              <div className="reveal-effect"><img src="images/side-gallery03.jpg" alt="Image"></div>
            </figure>
          </div>
          <div className="col-lg-5">
            <div className="side-content text-center">
              <h2>Stunning hotel
                incredible views</h2>
              <p>I booked this hotel based on the reviews of the service
                and the location. The location was incredible.</p>
              <a href="/about" className="custom-button">VIEW TESTIOMONIALS</a>
            </div>
          </div>
        </div>
      </div>
    </section>  */}


      <section className="testimonial-section">

        {/* SECTION HEADING  */}
        <div className="testimonial-header">
          <span>WHAT OUR CLIENTS SAY</span>
          <h2>Memories made with love and care</h2>
        </div>

        {/* SLIDER  */}
        <div className="testimonial-wrapper">
          <div className="testimonial-track" ref={trackRef} id="track">

            <div className="testimonial-card">
              <h3>Dream wedding venue</h3>
              <p>
                Eternity Banquet made our wedding magical. Every detail was handled
                beautifully and professionally, allowing us to truly enjoy our day.
              </p>
              <h4>— Rohan & Priya</h4>
              <small>Wedding Event</small>
            </div>

            <div className="testimonial-card">
              <h3>Perfect ambience</h3>
              <p>
                The ambience and hospitality were outstanding. Our guests loved
                the décor and elegant arrangements throughout the event.
              </p>
              <h4>— Aman Verma</h4>
              <small>Engagement</small>
            </div>

            <div className="testimonial-card">
              <h3>Professional team</h3>
              <p>
                A highly professional team that managed everything smoothly.
                We enjoyed our corporate event stress-free and perfectly organized.
              </p>
              <h4>— Neha Sharma</h4>
              <small>Corporate Event</small>
            </div>

            {/* NEW TESTIMONIALS  */}

            <div className="testimonial-card">
              <h3>Flawless execution</h3>
              <p>
                From planning to execution, everything was seamless. The team ensured
                that every guest felt welcomed and cared for.
              </p>
              <h4>— Kunal Mehta</h4>
              <small>Reception Party</small>
            </div>

            <div className="testimonial-card">
              <h3>Elegant décor & service</h3>
              <p>
                The décor was tasteful and elegant, and the service exceeded our
                expectations. Truly a premium experience.
              </p>
              <h4>— Sneha Kapoor</h4>
              <small>Anniversary Celebration</small>
            </div>

            <div className="testimonial-card">
              <h3>Highly recommended</h3>
              <p>
                Eternity Banquet delivered beyond what we imagined. The ambience,
                coordination, and hospitality were simply perfect.
              </p>
              <h4>— Rahul Jain</h4>
              <small>Birthday Celebration</small>
            </div>

          </div>
        </div>


        {/* NAV  */}
        <div className="testimonial-nav">
          <button onClick={() => prevSlide()}>‹</button>
          <button onClick={() => nextSlide()}>›</button>

        </div>

      </section>

      <NewsletterForm />

      {/* <section className="content-section">
        <div className="container" >
          <div className="row">
            <div className="col-12">
              <div className="newsletter-box">
                <h2> Contact Us </h2>
                <form >
                  <input type="email" placeholder="Enter Your Email Address...." />
                  <input type="submit" value="SUBSCRIBE" /></form>
                <small>Will be used in accordance with our <a href="#">Privacy Policy</a></small>

              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* end content-section  */}


      {/* PRE-FOOTER BAR */}
      <section
        className="content-section no-spacing"
        style={{ background: "#d39929" }}
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
};
export default Index;
