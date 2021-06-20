import React from "react";
import "./About.css";
import hero from "../assets/hero.png";

function About() {
  return (
    <div className="about" id="about">
      <h1 className="header">About</h1>
      <div className="about__container">
        <div className="about__text">
          <p className="text__html">{`<html>`}</p>
          <p className="text__html text__html--body">{`<body>`}</p>
          <p className="text__html text__margin">
            {`<h2>`}

            <div className="text__html--h2" data-aos="fade-left">
              Who's this guy?
            </div>

            {`<h2/>`}
          </p>
          <p className="text__html text__margin">
            {`<p>`}
            <br />
            <div
              className="text__html--p"
              data-aos="fade-left"
              data-aos-delay="250"
            >
              Person who is looking for an internship, and have a passion for UI
              effects, animations and creating intuitive, dynamic user
              experiences. Like you can assume the main area of my expertise is
              front-end development, HTML, CSS, JS and ReactJS. I practice
              building small web apps, features, animations, and coding
              interactive layouts. Well-organised person, problem solver, with
              high attention to detail. Fan of cycling, hiking, nature and TV
              series. A friendly person interested in the entire frontend
              spectrum, working and learning on projects with positive people.
            </div>
            <br />
            {`<p/>`}
          </p>
          <p className="text__html text__margin">
            {`<button>`}

            <div className="cv__container">
              <button
                className="btn__cv"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/144VLkDuX_w5OzQVuACzjEJCXJDNSKBPw/view?usp=sharing"
                  className="cv__link"
                >
                  Get a CV
                </a>
              </button>
            </div>

            {`<button/>`}
          </p>
          <p className="text__html text__html--body">{`<body/>`}</p>
          <p className="text__html">{`<html/>`}</p>
        </div>

        <div className="hero" data-aos="flip-left">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default About;
