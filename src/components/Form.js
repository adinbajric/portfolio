import React from "react";
import "./Form.css";
import emailjs from "emailjs-com";

function Form() {
  console.log(process.env);
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          alert("Message Sent, I'll get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occured, Plese try again", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        name="name"
        type="text "
        placeholder="Name"
        className="form__input"
        data-aos="fade-up"
      />
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        className="form__input"
        data-aos="fade-up"
        data-aos-delay="150"
      />
      <textarea
        name="message"
        type="text"
        placeholder="Your Message"
        className="form__input form__input-message"
        data-aos="fade-up"
        data-aos-delay="300"
      ></textarea>
      <div className="btn__container">
        <button className="btn__form">Send Message</button>
      </div>
    </form>
  );
}

export default Form;
