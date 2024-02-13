import React from "react";
import "./ContactCard.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function ContactCard() {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="back-color contact-form">
        <p className="massage-contact"> - Send us message</p>
        <p className="back-color welcome-line">
          WE WELCOME YOU , VISIT US ANYTIME
        </p>

        <input type="text" className="input-1" placeholder="Your Name" />
        <input type="mob" className="input-1" placeholder="Your Phone" />
        <input type="email" className="input-2" placeholder="Your Email" />
        <input type="text" className="input-3" placeholder="Message" />
        <br />

        <button type="button" className="msg-btn">
          Send Message{" "}
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default ContactCard;
