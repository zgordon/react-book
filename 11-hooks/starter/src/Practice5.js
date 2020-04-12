import React from "react";

class Practice5 extends React.Component {
  state = {
    goal: 10,
    points: 0
  };
  timerID;
  componentDidMount() {
    this.startTimer();
  }
  startTimer = () => {
    this.timerID = setInterval(() => {
      this.addPoint();
    }, 300);
  };
  stopTimer = () => {
    clearInterval(this.timerID);
  };
  addPoint = () => {
    this.setState({ points: this.state.points + 1 });
  };
  resetPoints = () => {
    this.setState({ points: 0 });
    this.startTimer();
  };
  render() {
    return (
      <div>
        {this.state.points < this.state.goal ? (
          <BarChart points={this.state.points} />
        ) : (
          <h1 style={{ color: "green" }}>GOAL!!!</h1>
        )}
        <h1>
          Points: {this.state.points}/{this.state.goal}
        </h1>
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
  /*
    6. Call componentWillUnmount()
    7. Inside of componentWillUnmount() log out that the <BarChart /> Component is unmounting
    8. The call this.props.stopTimer(); to stop the timer from running
  */

  render() {
    const barStyles = {
      height: "100px",
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
      transition: "height .6s"
    };
    return (
      <div className="bar" style={barStyles}>
        <div className="fill" style={fillStyles} />
      </div>
    );
  }
}

const Controls = props => {
  if (props.points >= props.goal) {
    return <button onClick={props.resetPoints}>Start Over</button>;
  } else {
    return null;
  }
};

export default Practice5;
