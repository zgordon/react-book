import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleLogin = e => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
    this.props.onLogin(this.state.email, this.state.password);
  };
  render() {
    return (
      <form className="container" name="login" onSubmit={this.handleLogin}>
        <p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
        </p>
        <p>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
        </p>
        <p>
          <button
            type="submit"
            disabled={!this.state.email && !this.state.password}
          >
            Login
          </button>
        </p>
      </form>
    );
  }
}
