import React, { useEffect, useState } from "react";
import NewsletterForm from "../components/NewsletterForm";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMainContact((currVal) => ({ ...currVal, loading: true }));
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/send-mail`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      const data = await res.json();

      if (data.success) {
        setMainContact({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setMainContact({ success: true, error: true, message: 'Email failed!' });
      }
    } catch (err) {
      setMainContact({ success: true, error: true, message: 'Backend not running!' });
    }
    setTimeout(() => {
      setMainContact(() => ({ }));
    }, 3000);
  };

  // const handleNewsletterSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!newsletterEmail) {
  //     alert("Please enter email");
  //     return;
  //   }

  //   try {
  //     const res = await fetch(
  //       `${process.env.REACT_APP_API_URL}/subscribe`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ email: newsletterEmail })
  //       }
  //     );

  //     const data = await res.json();

  //     if (data.success) {
  //       alert("Subscribed successfully!");
  //       setNewsletterEmail("");
  //     } else {
  //       alert("Subscription failed!");
  //     }
  //   } catch (err) {
  //     alert("Backend not running!");
  //   }
  // };


  const [mainContact, setMainContact] = useState({ success: false, message: '' });
  useEffect(() => { setMainContact({}) }, [])
  return (
    <>
      {/* PAGE HEADER */}
      <header
        className="page-header"
        data-background="assets/images/page-header01.jpg"
      >
        <div className="container">
          <h1>Contact Us</h1>
        </div>
        <div className="scroll-down"></div>
      </header>

      {/* CONTACT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="row align-items-center">

            {/* CONTACT FORM */}
            <div className="col-lg-7">
              <div className="section-title">
                <h6>DON'T HESITATE PLEASE</h6>
                <h2>Contact us for your idea or your new projects</h2>
              </div>


              <form className="contact-form" onSubmit={handleSubmit}>

                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <button type="submit">{mainContact?.loading == true ? 'LOADING...' : 'SEND MESSAGE'} </button>
                </div>
                {mainContact?.success && (
                  <div className={`form-message ${mainContact?.error ? 'text-danger' : 'text-success'}`}> 
                    {mainContact?.message}
                  </div>
                )}
              </form>

            </div>

            {/* CONTACT INFO */}
            <div className="col-xl-4 offset-xl-1 col-lg-5">

              <div className="contact-box">
                <h6>Eternity Banquet</h6>
                <address>
                  <a
                    href="https://maps.app.goo.gl/wwzzbrzSrJhZdVUf7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Government Industrial Estate, Jaydeo House, Plot No. 93/A,
                    Sahyadri Nagar, Kandivali West, Mumbai, Maharashtra 400067
                  </a>
                </address>
              </div>

              <div
                className="contact-box"
                data-background="#704b10"
              >
                <h6>Eternity Hospitality</h6>
                <address>
                  <a
                    href="https://maps.app.goo.gl/1AFeyRz7hPCwtvjk9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Railnagar, Opposite Pushpanjali Garden, Chandavarkar Road,
                    Borivali West, Mumbai - 400092, Maharashtra
                  </a>
                </address>
              </div>

              <div
                className="contact-box"
                data-background="#000"
              >
                <h6>Email:</h6>
                <p>sales@eternitybanquet.com</p>
                <h6>Contact No:</h6>
                <p>+91 99877 28747</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MAPS */}
      <div className="maps-row">

        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.200837326744!2d72.8451191!3d19.230077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b12f373a74ed%3A0xfeb4a9f9ffa8ac3d!2sEternity%20Banquet!5e0!3m2!1sen!2sin!4v1768028155807"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Eternity Banquet Kandivali"
          ></iframe>
        </div>


        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.604057351223!2d72.8304768!3d19.2124885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c9cea93c73%3A0xe3473f983995cf73!2sBorivali%20West%20Mumbai!5e0!3m2!1sen!2sin!4v1768028114899"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Eternity Hospitality Borivali"
          ></iframe>
        </div>


      </div>

      {/* NEWSLETTER */}
      {/* <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="newsletter-box">
                  <h2>Contact Us</h2>
                  <form onSubmit={handleNewsletterSubmit}>
                    <input
                      type="email"
                      placeholder="Enter Your Email Address...."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                    />
                    <input type="submit" value="SUBSCRIBE" />
                  </form>
                  <small>
                    Will be used in accordance with our{" "}
                    <a href="#">Privacy Policy</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section> */}

      <NewsletterForm />

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

export default Contact;
