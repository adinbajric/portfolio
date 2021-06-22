import React from "react";
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
import { skillsList } from "../assets/skillsList";
import SkillContainer from "./SkillContainer";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="header">Skills</h1>
      {skillsList.map((item) => {
        return <SkillContainer item={item} />;
      })}
    </div>
  );
}

export default Skills;
