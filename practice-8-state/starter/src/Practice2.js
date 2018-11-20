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

  render() {
    return (
      <>
        <p>Username: {this.state.username}</p>
        <p>
          {/* 
            4. onChange should call this.handleUsername
            5. Set placeholder to the username in state
          */}
          <input onChange="" type="text" placeholder="" />
        </p>
      </>
    );
  }
}

export default Practice2;
