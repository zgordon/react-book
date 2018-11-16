import React from "react";
import { Link } from "react-router-dom";

const Header = props => (
  <header>
    <p>
      <Link to="/">My Site</Link>
    </p>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/new/">Add New +</Link>
      </li>
    </ul>
  </header>
);
export default Header;
