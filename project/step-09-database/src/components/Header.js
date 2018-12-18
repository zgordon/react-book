import React from "react";
import { Link } from "react-router-dom";

const Header = props => (
  <header className="App-header">
    <ul className="container">
      <li>
        <Link to="/">My Site</Link>
      </li>
      {props.authenticated ? (
        <>
          <li>
            <Link to="/new">New Post</Link>
          </li>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                props.onLogout();
              }}
            >
              Logout
            </a>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </ul>
  </header>
);
export default Header;
