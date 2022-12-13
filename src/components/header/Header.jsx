import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <img src={props.image} alt="Logo" className="header_photo" />
    </header>
  );
}

export default Header;
