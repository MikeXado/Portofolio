import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Freelancer"],
      startDelay: 300,
      typeSpeed: 180,
      backSpeed: 100,

      backDelay: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero-text">
        <div className="hero-text__title">Gurin Mihail</div>
        <div className="hero-header__profestion">
          <span className="auto-type" ref={el}></span>
        </div>
      </div>
    </div>
  );
}
