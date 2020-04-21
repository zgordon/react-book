import React from "react";
import UserContext from "../context/UserContext";

class WelcomeMessage extends React.Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        <h1>Welcome {this.context.user.name}!</h1>
        <p>Your account info has been sent to {this.context.user.email}.</p>
      </div>
    );
  }
}

export default WelcomeMessage;
