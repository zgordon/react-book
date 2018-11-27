import React from "react";

class Practice3 extends React.Component {
  state = {
    goal: 20,
    points: 0
  };
  addPoint = () => {
    this.setState({ points: this.state.points + 1 });
  };
  resetPoints = () => {
    this.setState({ points: 0 });
  };
  render() {
    return (
      <>
        <BarChart points={this.state.points} />
        <h1>Points: {this.state.points}</h1>
        <Controls
          points={this.state.points}
          goal={this.state.goal}
          addPoint={this.addPoint}
          resetPoints={this.resetPoints}
        />
      </>
    );
  }
}

class BarChart extends React.Component {
  /* 
    1. Call shouldComponentUpdate(nextProps, nextState) {}
    2. Check to see if nextProps.points is divisble by 5 with no remainder
        (nextProps.points % 5)
    3. If points has a remainder then return false
    4. If points has no remainder the return true
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

export default Practice3;
