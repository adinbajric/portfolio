import React from "react";
import "./SkillContainer.css";

function SkillContainer({ item }) {
  return (
    <div className="skillContainer">
      {item.map((i) => {
        return (
          <div className="skills__card">
            <div className="skill__card--img">
              <img src={i.img} />
            </div>
            <div className="skill__card--title">
              <p>{i.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillContainer;
