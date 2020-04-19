import React from "react";

class WelcomeMessage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.name}!</h1>
        <p>Your account info has been sent to {this.props.user.email}.</p>
      </div>
    );
  }
}

export default WelcomeMessage;
