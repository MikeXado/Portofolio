import React from "react";
import Hero from "../../components/hero/Hero";
import codingMp4 from "../../assets/coding1.mp4";
import codingWebm from "../../assets/coding1.webm";
import "./home.scss";
export default function Home() {
  return (
    <div className="header">
      <video className="video-bg" autoPlay loop muted>
        <source src={codingMp4} type="video/mp4" />
        <source src={codingWebm} type="video/webm" />
      </video>

      <div className="__container">
        <div className="header-content">
          <Hero />
        </div>
      </div>
    </div>
  );
}
