import React, { useState } from "react";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // success | error | loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        }
      );

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="content-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="newsletter-box">
              <h2>Contact Us</h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter Your Email Address...."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="submit"
                  value={status === "loading" ? "SENDING..." : "SUBSCRIBE"}
                  disabled={status === "loading"}
                />
              </form>

              {status === "success" && (
                <p style={{ color: "green", marginTop: "10px" }}>
                  Subscribed successfully!
                </p>
              )}

              {status === "error" && (
                <p style={{ color: "red", marginTop: "10px" }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <small>
                Will be used in accordance with our{" "}
                <a href="#">Privacy Policy</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterForm;
