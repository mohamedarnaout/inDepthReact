import "./Footer.css";
import React from "react";

function Footer(props) {
  return (
    <footer>
      <img src={props.image} alt="footer logo" class="footer_img" />
      <p class="footer_text">{props.text}</p>
    </footer>
  );
}

export default Footer;
