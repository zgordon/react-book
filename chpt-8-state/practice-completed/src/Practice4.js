import React from "react";

<<<<<<< HEAD
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
=======
/*
  1. Create a functional component called Header that accepts props
  2. Return an <h2> with the value of text from props.text
*/
const Header = props => <h2>{props.text}</h2>;

/*
  3. Create a functional component called Button
  4. Return an <input> with the value for onCLick set 
      to props.onClick and the value of the Button text
      set to props.text      
*/
const Button = props => <button onClick={props.onClick}>{props.text}</button>;

class Practice4 extends React.Component {
  /*
    5. Setup state with a count property set to 0
  */
  state = {
    count: 0
  };

  /*
    6. Create an incremenent function that adds one to the value of count in state
    7. Create a decremenent function that subtracts one from the value of count in state
    8. Create a reset function that sets the value of count in state back to 0
  */
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        {/*
          9. Call Header and pass in the counter state as the text prop
          10. Call Button with onClick set to decrement and text "-"
          11. Call Button with onClick set to increment and text "+"
          12. Call Button with onClick set to reset and text "Reset"
        */}
        <Header text={this.state.count} />
        <Button onClick={this.decrement} text="-" />
        <Button onClick={this.increment} text="+" />
        <Button onClick={this.reset} text="Reset" />
      </>
    );
  }
}
>>>>>>> 74218353dc52f5b37ffa26390f32a87e46d19bf3

export default Practice4;
