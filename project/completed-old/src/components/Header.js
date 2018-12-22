import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Auth/Logout";

const Header = props => (
  <header className="App-header">
    <ul>
      <li>
        <Link to="/">Posts</Link>
      </li>
      {props.authenticated ? (
        <>
          <li>
            <Link to="/new/">Add New +</Link>
          </li>
          <li>
            <Logout onLogout={props.onLogout} />
          </li>
        </>
      ) : (
        <li>
          <Link to="/login/">Login</Link>
        </li>
      )}
    </ul>
  </header>
);
export default Header;
