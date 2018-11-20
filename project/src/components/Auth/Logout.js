import React from "react";

const Logout = props => {
  const handleClick = e => {
    e.preventDefault();
    props.onLogout();
  };
  return (
    <a href="/logout" id="logout" onClick={handleClick}>
      Logout
    </a>
  );
};
export default Logout;
