import React from "react";

class Practice2 extends React.Component {
  state = {
    username: "yourusername"
  };

  /* 
    1. Create an arrow function named handleUsername
    2. Accept `e` as a parameter for the event object
    3. Update the value of username in state with the value 
        from the form (e.target.value)
  */
  handleUsername = e => {
    this.setState({ username: e.target.value });
  };
  render() {
    return (
      <>
        <p>Username: {this.state.username}</p>
        <p>
          {/* 
            4. onChange call this.handleUsername
            5. Set placeholder to the username in state
          */}
          <input
            onChange={this.handleUsername}
            type="text"
            placeholder={this.state.username}
          />
        </p>
      </>
    );
  }
}

export default Practice2;
