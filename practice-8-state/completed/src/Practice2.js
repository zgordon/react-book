import React from "react";

<<<<<<< HEAD
const Practice2 = () => {
  /*
    1. Create post object with an id and title
  */
  const post = {
    id: 1,
    title: "New Post"
  };
  return (
    <div className="practice">
      {/* 
        2. Call the Post component below
        3. Pass in the user object as a prop
      */}
      <Post post={post} />
    </div>
  );
};

/*
  4. Make the Post component accept props
  5. Have Post component rendr the post title and ID to the page
*/
const Post = props => {
  return (
    <p>
      {props.post.title} [{props.post.id}]
    </p>
  );
};
=======
class Practice2 extends React.Component {
  state = {
    username: "yourusername"
  };

  /* 
    1. Create an arrow function named handleUsername
    2. Accept `e` as a parameter for the event object
    3. Update the value of username in state with the value 
        from the form (e.target.value)
  */
  handleUsername = e => {
    this.setState({ username: e.target.value });
  };
  render() {
    return (
      <>
        <p>Username: {this.state.username}</p>
        <p>
          {/* 
            4. onChange call this.handleUsername
            5. Set placeholder to the username in state
          */}
          <input
            onChange={this.handleUsername}
            type="text"
            placeholder={this.state.username}
          />
        </p>
      </>
    );
  }
}
>>>>>>> 74218353dc52f5b37ffa26390f32a87e46d19bf3

export default Practice2;
