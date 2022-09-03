import React from "react";
import "./portfolio.scss";
import ProjectsLogic from "../../components/porjects/ProjectsLogic";

export default function Portofolio() {
  return (
    <div id="portofolio">
      <div className="__container">
        <div className="portofolio-content">
          <h1 className="portofolio-content__title heading">Projects</h1>
          <ProjectsLogic />
        </div>
      </div>
    </div>
  );
}
