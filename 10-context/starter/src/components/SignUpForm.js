import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import WelcomeMessage from "./WelcomeMessage";

class SignUpForm extends React.Component {
  state = {
    user: {},
  };

  updateUser = (event) => {
    const value = event.target.value;
    const field = event.target.id;
    const user = this.state.user;
    user[field] = value;
    this.setState(user);
  };

  currentStep = ({ step, updateStep }) => {
    switch (step) {
      case `1`:
        return (
          <Step1
            user={this.state.user}
            updateUser={this.updateUser}
            nextStep="2"
          />
        );
      case `2`:
        return (
          <Step2
            user={this.state.user}
            updateUser={this.updateUser}
            nextStep="3"
          />
        );
      case `3`:
        return (
          <Step3
            user={this.state.user}
            updateUser={this.updateUser}
            nextStep="completed"
          />
        );
      case `completed`:
        return <WelcomeMessage />;
      default:
        return (
          <button type="submit" onClick={() => updateStep(`1`)}>
            Get Started!
          </button>
        );
    }
  };

  render() {
    return <form>{this.currentStep({ step: `1`, updateStep: () => {} })}</form>;
  }
}

export default SignUpForm;
