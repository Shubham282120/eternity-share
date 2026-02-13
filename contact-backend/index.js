const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const emailConfigurations = require('./utils/emailConfigurations')();
const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post("/send-mail", async (req, res) => {
  console.log("Incoming data:", req.body);

  const { name, email, phone, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`, // ✅ FIX
      to: process.env.EMAIL_USER,
      replyTo: email, // user email goes here
      subject: "New Contact Form Message",
      html: `
        <h3>New Contact Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    console.log("Email sent:", info.response);
    res.json({ success: true });

  } catch (error) {
    console.error("SMTP ERROR:", error); // 🔥 IMPORTANT
    res.status(500).json({ success: false, error: error.message });
  }
});


app.listen(5000, () => {
  console.log("SMTP server running on http://localhost:5000");
});


app.post("/subscribe", async (req, res) => {

  const { email } = req.body;
 // console.log(process.env.EMAIL_USER.split(","),'testing');
debugger;
  try {
    await transporter.sendMail({
      from: `"Website Newsletter" <${process.env.EMAIL_USER}>`,
      to: emailConfigurations.sendMultipleEmail,
      replyTo: email,
      subject: "New Newsletter Subscription",
      html: `
        <h3>New Newsletter Subscription</h3>
        <p><b>Email:</b> ${email}</p>
      `
    });

    res.json({ success: true });
  } catch (error) {
    console.error("NEWSLETTER SMTP ERROR:", error);
    res.status(500).json({ success: false });
  }
});

app.post("/send-booking", async (req, res) => {
  const { name, email, phone, plan, items, total } = req.body;

  try {
    await transporter.sendMail({
      from: `"New Booking" <${process.env.EMAIL_USER}>`,
      to: emailConfigurations.sendMultipleEmail,
      replyTo: email,
      subject: "New Booking Request",
      html: `
        <h2>New Booking Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Plan:</b> ${plan}</p>
        <p><b>Items:</b></p>
        <ul>
          ${items.map(i => `<li>${i}</li>`).join("")}
        </ul>
        <h3>Total Amount: ₹${total}</h3>
      `
    });

    res.json({ success: true });
  } catch (error) {
    console.error("BOOKING SMTP ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});


