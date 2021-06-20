import React from "react";
import "./Home.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {
  return (
    <div className="home" id="home">
      <div className="text-typing">
        <p>
          Hello, I am <span>Adin Bajrić</span>.
        </p>
      </div>
      <Link
        className="btn btn__home"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        View my work <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  );
}

export default Home;
