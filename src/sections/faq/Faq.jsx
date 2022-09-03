import React from "react";
import AcordeonHeading from "../../components/accordeon/AcordeonHeading";
import FaqLogic from "../../components/accordeon/FaqLogic";

import "./faq.scss";
export default function Faq() {
  return (
    console.log("component rerender"),
    (
      <div id="faq">
        <div className="__container">
          <div className="faq-content">
            <AcordeonHeading />
            <FaqLogic />
          </div>
        </div>
      </div>
    )
  );
}
