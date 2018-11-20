import React from "react";
/*
  1. Make sure Create React App is stopped
  2. Run `npm install react-simple-storage` 
  3. Start Create React App back up again with `npm start`
  4. Import SimpleStorage from "react-simple-storage"
*/

const Header = props => <h2>{props.text}</h2>;

const Button = props => <button onClick={props.onClick}>{props.text}</button>;

class Practice5 extends React.Component {
  state = {
    count: 0
  };

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
          5. Call <SimpleStorage parent={this} />
        */}
        <Header text={this.state.count} />
        <Button onClick={this.decrement} text="-" />
        <Button onClick={this.increment} text="+" />
        <Button onClick={this.reset} text="Reset" />
      </>
    );
  }
}

export default Practice5;
