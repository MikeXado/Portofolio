import React, { useState } from "react";
import { faq } from "../../constants";
import Acordeon from "../../components/accordeon/Acordeon";

export default function FaqLogic() {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <div className="faq-content__items">
      {faq.map((faq, index) => {
        return (
          <Acordeon
            key={faq.id}
            onToggle={() => handleToggle(index)}
            active={clicked === index}
            faq={faq}
          />
        );
      })}
    </div>
  );
}
