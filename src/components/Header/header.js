import React from "react";
import "./header.css";

function Header(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default Header;
