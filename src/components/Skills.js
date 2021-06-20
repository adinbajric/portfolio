import React from "react";
import "./Skills.css";
import html5 from "../assets/html5.png";
import react from "../assets/react.png";
import css3 from "../assets/css3.png";
import sass from "../assets/sass.png";
import javascript from "../assets/javascript.png";
import jquery from "../assets/jquery.png";
import bootstrap from "../assets/bootstrap.png";
import materialize from "../assets/materialize.png";
import github from "../assets/github.png";
import figma from "../assets/figma.png";
import photoshop from "../assets/photoshop.png";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="header">Skills</h1>

      <div
        className="skills__card"
        data-aos="fade-right"
        data-aos-delay="150"
        data-aos-duration="1100"
      >
        <p className="skills__text">HTML</p>
        <div className="skills__card-container">
          <div className="skill">
            <div className="skills__card-image">
              <img src={html5} alt="html" />
            </div>
            <h3 className="skills__card-text">HTML5</h3>
          </div>
          <div className="skill">
            <div className="skills__card-image">
              <img src={react} alt="react" />
            </div>
            <h3 className="skills__card-text">JSX</h3>
          </div>
        </div>
      </div>
      <div
        className="skills__card "
        data-aos="fade-left"
        data-aos-delay="150"
        data-aos-duration="1100"
      >
        <p className="skills__text">CSS</p>
        <div className="skills__card-container">
          <div className="skill">
            <div className="skills__card-image">
              <img src={css3} alt="css3" />
            </div>
            <h3 className="skills__card-text">CSS3</h3>
          </div>
          <div className="skill">
            <div className="skills__card-image">
              <img src={sass} alt="sass" />
            </div>
            <h3 className="skills__card-text">SASS</h3>
          </div>
          <div className="skill">
            <div className="skills__card-image">
              <img src={bootstrap} alt="bootstrap" />
            </div>
            <h3 className="skills__card-text">Bootstrap</h3>
          </div>
          <div className="skill">
            <div className="skills__card-image">
              <img src={materialize} alt="materialize" />
            </div>
            <h3 className="skills__card-text">Materialize</h3>
          </div>
        </div>
      </div>
      <div
        className="skills__card"
        data-aos="fade-right"
        data-aos-delay="150"
        data-aos-duration="1100"
      >
        <p className="skills__text">Javascript</p>
        <div className="skills__card-container">
          <div className="skill">
            <div className="skills__card-image">
              <img src={javascript} alt="javascript" />
            </div>
            <h3 className="skills__card-text">Javascript</h3>
          </div>
          <div className="skill">
            <div className="skills__card-image">
              <img src={react} alt="react" />
            </div>
            <h3 className="skills__card-text">React</h3>
          </div>
          <div className="skill">
            <div className="skills__card-image">
              <img src={jquery} alt="jquery" />
            </div>
            <h3 className="skills__card-text">jQuery</h3>
          </div>
        </div>
      </div>
      <div
        className="skills__card"
        data-aos="fade-left"
        data-aos-delay="150"
        data-aos-duration="1100"
      >
        <p className="skills__text">Other</p>
        <div className="skills__card-container">
          <div className="skill">
            <div className="skills__card-image">
              <img src={github} alt="github" />
            </div>
            <h3 className="skills__card-text">Github</h3>
          </div>
          <div className="skill">
            <div className="skills__card-image">
              <img src={photoshop} alt="photoshop" />
            </div>
            <h3 className="skills__card-text">Photoshop</h3>
          </div>
          <div className="skill">
            <div className="skills__card-image">
              <img src={figma} alt="figma" />
            </div>
            <h3 className="skills__card-text">Figma</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
