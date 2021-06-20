import React from "react";
import "./Contact.css";
import Form from "./Form";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1 className="header">Contact</h1>
      <p className="contact__text">Have a question or want to work together?</p>
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;
