import React from "react";
import NavBar from "./NavBar";

const Header = (props) => (
  <header>
    <NavBar />
    {props.children}
  </header>
);
export default Header;
