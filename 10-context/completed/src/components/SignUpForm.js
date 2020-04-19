import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import WelcomeMessage from "./WelcomeMessage";
import UserContext from "../context/UserContext";
import FormContext from "../context/FormContext";

class SignUpForm extends React.Component {
  static contextType = UserContext;

  updateUser = (event) => {
    const value = event.target.value;
    const field = event.target.id;
    const user = this.context.user;
    user[field] = value;
    this.context.updateUser(user);
  };

  currentStep = ({ step, updateStep }) => {
    switch (step) {
      case `1`:
        return (
          <Step1
            user={this.context.user}
            updateUser={this.updateUser}
            nextStep="2"
          />
        );
      case `2`:
        return (
          <Step2
            user={this.context.user}
            updateUser={this.updateUser}
            nextStep="3"
          />
        );
      case `3`:
        return (
          <Step3
            user={this.context.user}
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
    return (
      <form>
        <FormContext.Consumer>
          {(context) => this.currentStep(context)}
        </FormContext.Consumer>
      </form>
    );
  }
}

export default SignUpForm;
