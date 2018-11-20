import React from "react";

<<<<<<< HEAD
const Practice1 = () => {
  const id = 1;
  const username = "zgordon";
  return (
    <div className="practice">
      {/* 
        1.Pass the id and username into <User /> as props 
      */}
      <User id={id} username={username} />
    </div>
  );
};

const User = props => {
  return (
    <p>
      {props.username} [{props.id}]
    </p>
  );
};
=======
class Practice1 extends React.Component {
  /* 
    1. Create a state object
    2. Create a username property with a value of some username
  */
  state = {
    username: "yourusername"
  };
  render() {
    /* 
      3. Display the username from state        
    */
    return <p>{this.state.username}</p>;
  }
}
>>>>>>> 74218353dc52f5b37ffa26390f32a87e46d19bf3

export default Practice1;
