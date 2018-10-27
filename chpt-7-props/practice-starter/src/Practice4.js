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
      <User />
    </div>
  );
};

/*
  2. Destructure username and firstName from props
*/
const User = props => {
  return (
    <div className="user">
      <h1>Hi ___!</h1>
      <p>Username: ___</p>
    </div>
  );
};

export default Practice4;
