import React from "react";
import { LeftTech } from "../../constants";

export default function TechLeft() {
  return (
    <div className="side">
      {LeftTech.map((tech) => {
        return <img key={tech.id} src={tech.img} alt="tech" />;
      })}
    </div>
  );
}
