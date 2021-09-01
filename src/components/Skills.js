import React from "react";
import { skillsList } from "../assets/skillsList";
import SkillContainer from "./SkillContainer";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="header">Skills</h1>
      {skillsList.map((item, index) => {
        return <SkillContainer item={item} key={index} />;
      })}
    </div>
  );
}

export default Skills;
