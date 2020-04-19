import React from "react";

class WelcomeMessage extends React.Component {
  state = {
    step: `1`,
  };

  isActive = () => (this.state.step === this.props.step ? true : false);

  updateStep = () => this.setState({ step: this.props.step });

  render() {
    return (
      <button
        className={this.isActive() ? `active` : ``}
        disabled={this.state.step === `completed` ? true : false}
        onClick={this.updateStep}
      >
        {this.props.step}
      </button>
    );
  }
}

export default WelcomeMessage;
