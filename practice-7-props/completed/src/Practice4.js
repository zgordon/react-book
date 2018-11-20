import React from "react";

const Practice4 = () => {
  const user = {
    id: 1,
    username: "zgordon",
    firstName: "Zac",
    lastName: "Gordon",
    preferredName: "Zac",
    url: "https://zacgordon.com",
    twitter: "@zgordon"
  };
  return (
    <div className="practice">
      {/*         
        1. Spread the "user" object into User so each "user" property becomes it's own prop
      */}
      <User {...user} />
    </div>
  );
};

/*
  2. Destructure username and firstName from props
*/
const User = ({ firstName, username }) => {
  return (
    <div className="user">
      <h1>Hi {firstName}!</h1>
      <p>Username: {username}</p>
    </div>
  );
};

export default Practice4;
