import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NavBarStep from "./components/NavBarStep";
import MainContent from "./components/MainContent";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

import "./App.css";

class App extends React.Component {
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
      </div>
    );
  }
}

export default App;
