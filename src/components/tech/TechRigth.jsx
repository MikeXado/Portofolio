import React from "react";
import { RightTech } from "../../constants";

export default function TechRigth() {
  return (
    <div className="side">
      {RightTech.map((tech) => {
        return <img key={tech.id} src={tech.img} alt="tech" />;
      })}
    </div>
  );
}
