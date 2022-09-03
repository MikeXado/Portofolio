import React from "react";
export default function Acordeon({ faq, onToggle, active }) {
  return (
    <div className="accordeon">
      <div className="faq-content__button" onClick={onToggle}>
        <span className="faq-content__button-text">{faq.title}</span>
        <span className="faq-content__button-img">{active ? "-" : "+"}</span>
      </div>
      <div
        style={{
          maxHeight: "0",
          ...(active ? { maxHeight: "100%" } : {}),
        }}
        className="faq-content__panel"
      >
        <p>{faq.desc}</p>
      </div>
    </div>
  );
}
