import React from "react";
import "./Projects.css";
import "./Tab.css";

function Tab({ name, filter, index, activeClass }) {
  return (
    <div className="projects__filter">
      <p
        onClick={() => filter(name, index)}
        className={index === activeClass ? "tab--active tab" : "tab"}
      >
        {name}
      </p>
    </div>
  );
}

export default Tab;
