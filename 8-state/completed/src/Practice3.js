import React from "react";

/* 
  1. Setup UserForm to accept props
  2. Display the proper values from props where needed
*/
const UserForm = props => (
  <p>
    <label htmlFor="{props.id}">{props.label}</label>:
    <input id="{props.id}" type="text" onChange="{props.onChange}" />
  </p>
);

class Practice3 extends React.Component {
  state = {
    first: "First",
    last: "Last"
  };

  handleFirst = e => {
    this.setState({ first: e.target.value });
  };
  handleLast = e => {
    this.setState({ last: e.target.value });
  };

  render() {
    return (
      <>
        <h2>
          {this.state.first} {this.state.last}
        </h2>
        {/*
          3. Call <UserForm /> and pass in the following prop values
              id = "firstName"
              label = "First Name"
              onChange = handleFirst
          4. Call <UserForm /> again and pass in the following prop values
              id = "lastName"
              label = "Last Name"
              onChange = handleLast              
        */}
        <UserForm
          id="firstName"
          label="First Name"
          onChange={this.handleFirst}
        />
        <UserForm id="lastName" label="Last Name" onChange={this.handleLast} />
      </>
    );
  }
}

export default Practice3;
