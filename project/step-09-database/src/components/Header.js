import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, onLogout }) => (
  <header className="App-header">
    <ul className="container">
      <li>
        <Link to="/">My Site</Link>
      </li>
      {isAuthenticated ? (
        <>
          <li>
            <Link to="/new">New Post</Link>
          </li>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                onLogout();
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
