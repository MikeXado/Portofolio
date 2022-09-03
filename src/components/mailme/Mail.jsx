import React from "react";
import mailPng from "../../assets/mail.gif";
import "./mail.scss";
function Mail() {
  return (
    <div className="contact-me">
      <a className="contact-me__button" href="mailto:mike.gurin21@gmail.com">
        <img src={mailPng} alt="mail" />
      </a>
    </div>
  );
}

export default Mail;
