import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="footer">
      <div className="icon__arrowUp" onClick={scrollToTop}>
        <i className="fas fa-angle-double-up"></i>
      </div>
      <div className="socialIcons">
        <a
          target="_blank"
          href="https://github.com/adinbajric"
          className="social__icon"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/adin-bajric-a70590208/"
          className="social__icon"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/cico_ba/"
          className="social__icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer__text">
        <p>
          Adin Bajric <span>&copy; 2021</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
