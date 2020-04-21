import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NavBarStep from "./components/NavBarStep";
import MainContent from "./components/MainContent";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

import UserContext from "./context/UserContext";
import FormContext from "./context/FormContext";

import "./Practice5.css";

class Practice5 extends React.Component {
  state = {
    user: {},
    step: `1`,
  };

  updateUser = (user) => {
    this.setState({ user });
  };

  updateStep = (step) => {
    this.setState({ step });
  };

  render() {
    return (
      <div>
        <UserContext.Provider
          value={{ user: this.state.user, updateUser: this.updateUser }}
        >
          <FormContext.Provider
            value={{ step: this.state.step, updateStep: this.updateStep }}
          >
            <Header>
              <NavBar>
                Signup Steps:
                <NavBarStep step="1" />
                <NavBarStep step="2" />
                <NavBarStep step="3" />
              </NavBar>
            </Header>
            <MainContent>
              <SignUpForm />
            </MainContent>
            <Footer>
              <ProgressBar />
            </Footer>
          </FormContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default Practice5;
