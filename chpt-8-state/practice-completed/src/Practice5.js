import React from "react";
<<<<<<< HEAD

const Practice5 = () => {
  const user = {
    id: 1,
    username: "zgordon",
    firstName: "Zac",
    lastName: "Gordon",
    preferredName: "Zac",
    url: "https://zacgordon.com",
    twitter: "zgordon"
  };
  return (
    <div className="practice">
      {/*         
        1. Spread the "user" object into User so each "user" property becomes it's own prop
      */}
      <User {...user} />
    </div>
  );
};

/*
  2. Destructure all of the props you will need 
  3. Pass the props you need to <FullName />
  4. Pass the username to <Username />
  5. Pass the url and twitter to <Social />
*/
const User = ({ firstName, lastName, username, url, twitter }) => {
  return (
    <div className="user">
      <FullName firstName={firstName} lastName={lastName} />
      <Username username={username} />
      <Social url={url} twitter={twitter} />
    </div>
  );
};

/*
  6. Destructure the props needed
*/
const FullName = ({ firstName, lastName }) => (
  <h1>
    {firstName} {lastName}
  </h1>
);

/*
  6. Create a <Username /> component that displays the username
*/
const Username = ({ username }) => <p>{username}</p>;

/*
  7. Destructure the props you will need
  8. Make the Website and Twitter links work based on props
*/
const Social = ({ url, twitter }) => {
  return (
    <ul className="social">
      <li>
        <a href={url}>Website</a>
      </li>
      <li>
        <a href={`https://twitter.com/${twitter}`}>Twitter</a>
      </li>
    </ul>
  );
};
=======
/*
  1. Make sure Create React App is stopped
  2. Run `npm install react-simple-storage` 
  3. Start Create React App back up again with `npm start`
  4. Import SimpleStorage from "react-simple-storage"
*/
import SimpleStorage from "react-simple-storage";

const Header = props => <h2>{props.text}</h2>;

const Button = props => <button onClick={props.onClick}>{props.text}</button>;

class Practice5 extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        {/*
          5. Call <SimpleStorage parent={this} />
        */}
        <SimpleStorage parent={this} />
        <Header text={this.state.count} />
        <Button onClick={this.decrement} text="-" />
        <Button onClick={this.increment} text="+" />
        <Button onClick={this.reset} text="Reset" />
      </>
    );
  }
}
>>>>>>> 74218353dc52f5b37ffa26390f32a87e46d19bf3

export default Practice5;
