import React from "react";
import { projects } from "../../constants";
import chain from "../../assets/chain.png";
import github from "../../assets/github.png";
export default function ProjectsLogic() {
  return (
    <div className="portofolio-content__projects">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="portofolio-content__item item-project"
          >
            <div className="item-project__img">
              <img src={project.img} alt="project" />
            </div>
            <div className="item-project__name">{project.title}</div>
            <div className="item-project__description">{project.desc}</div>
            <div className="item-project__tech tech-project">
              {project.tech.map((tech) => {
                return (
                  <div key={tech.id} className="tech-project__item">
                    {tech.name}
                  </div>
                );
              })}
            </div>
            <div className="item-project__links">
              <a href={project.livePreview} className="link">
                <img src={chain} alt="git-hub" /> LivePreview
              </a>
              <a href={project.code} className="link">
                <img src={github} alt="chain" /> Code
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
