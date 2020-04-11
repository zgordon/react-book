import React from "react";

class Practice4 extends React.Component {
  state = {
    goal: 20,
    points: 0
  };

  /* 
    1. Call componentDidUpdate(prevProps, prevState) {}
    2. Log out the prev state of points
    3. Log out the current state of points
    4. Write a conditional statement to check if 
       prevState.points !== this.state.points
    5. If that passes, then log out "State Changed!"
  */

  addPoint = () => {
    this.setState({ points: this.state.points + 1 });
  };
  resetPoints = () => {
    this.setState({ points: 0 });
    console.clear();
  };
  render() {
    return (
      <div>
        <BarChart points={this.state.points} />
        <h1>Points: {this.state.points}</h1>
        <Controls
          points={this.state.points}
          goal={this.state.goal}
          addPoint={this.addPoint}
          resetPoints={this.resetPoints}
        />
      </div>
    );
  }
}

class BarChart extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.points % 5) {
      return false;
    } else {
      return true;
    }
  }

  /* 
    6. Call componentDidUpdate(prevProps, prevState) {}
    7. Log out the prev props of points
    8. Log out the current props of points
    9. Write a conditional statement to check if 
       prevProps.points !== this.props.points
    10. If that passes, then log out "Props Changed!"
  */

  render() {
    const barStyles = {
      height: "200px",
      width: "50px",
      border: "1px #ccc solid",
      position: "relative"
    };
    const fillStyles = {
      height: `${this.props.points}0px`,
      width: "50px",
      backgroundColor: "green",
      position: "absolute",
      bottom: "0",
      transition: "height .4s"
    };
    return (
      <div className="bar" style={barStyles}>
        <div className="fill" style={fillStyles} />
      </div>
    );
  }
}

const Controls = props => {
  if (props.points < props.goal) {
    return <button onClick={props.addPoint}>+1 Point</button>;
  } else {
    return (
      <>
        <button disabled>Done!</button>
        <button onClick={props.resetPoints}>Reset</button>
      </>
    );
  }
};

export default Practice4;
