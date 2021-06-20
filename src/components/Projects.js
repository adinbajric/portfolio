import React, { useState } from "react";
import "./Projects.css";
import Card from "./Card";
import projectList from "../assets/projectList";
import Tab from "./Tab";

function Projects() {
  const [project, setProject] = useState(projectList);
  const [filteredProjects, setFilteredProjects] = useState(project);
  const [activeClass, setActiveClass] = useState(0);

  let tabData = [
    { name: "All", index: 0 },
    { name: "React", index: 1 },
    { name: "Javascript", index: 2 },
  ];

  const filter = (e, index) => {
    if (e === "React") {
      setFilteredProjects(project.filter((item) => item.sort === "react"));
    }
    if (e === "All") {
      setFilteredProjects(projectList);
    }
    if (e === "Javascript") {
      setFilteredProjects(project.filter((item) => item.sort === "javascript"));
    }
    setActiveClass(index);
  };

  return (
    <div className="projects" id="projects">
      <h1 className="header">Projects</h1>
      <div className="projects__filter">
        {tabData.map((tab) => {
          return (
            <Tab
              {...tab}
              activeClass={activeClass}
              filter={filter}
              key={tab.name}
            />
          );
        })}
      </div>
      <div className="projects-card__container">
        {filteredProjects.map((item, i) => {
          return <Card {...item} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
