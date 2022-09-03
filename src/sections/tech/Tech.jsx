import React from "react";
import TechLeft from "../../components/tech/TechLeft";
import TechRigth from "../../components/tech/TechRigth";
import "./tech.scss";

export default function Tech() {
  return (
    <div id="tech">
      <div className="__container">
        <div className="tech-content">
          <div className="tech-content__text">
            <h1 className="tech-content__title heading">My Tech</h1>
            <p className="tech-content__subtitle subtitle">
              Technologies I’ve been working with recently
            </p>
          </div>
          <div className="tech-content__images">
            <TechLeft />
            <TechRigth />
          </div>
        </div>
      </div>
    </div>
  );
}
