import React from "react";

class StepButton extends React.Component {
  handleOnClick = () => {};

  render() {
    return (
      <input
        className="step-button"
        type="submit"
        value={this.props.label || `Next`}
        onClick={this.handleOnClick}
      />
    );
  }
}
export default StepButton;
