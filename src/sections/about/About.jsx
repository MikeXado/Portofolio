import React from "react";
import BioImg from "../../components/bio/BioImg";
import BioSlider from "../../components/bio/BioSlider";
import "./about.scss";
export default function About() {
  return (
    <div id="about">
      <div className="__container">
        <div className="about-content">
          <h1 className="about-content__title heading">About Me</h1>
          <div className="about-content__bio bio">
            <BioSlider />
            <BioImg />
          </div>
        </div>
      </div>
    </div>
  );
}
