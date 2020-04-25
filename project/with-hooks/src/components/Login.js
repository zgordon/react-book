import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = (props) => {
  const { onLogin } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <form className="container" name="login" onSubmit={handleLogin}>
      <p>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </p>
      <p>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </p>
      <p>
        <button type="submit" disabled={!email && !password}>
          Login
        </button>
      </p>
    </form>
  );
};
export default Login;
