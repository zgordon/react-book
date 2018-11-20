import React from "react";

<<<<<<< HEAD
const Practice3 = () => {
  const title = "Hello World";
  const author = "Zac Gordon";
  return (
    <div className="practice">
      {/* 
        1. Pass title and author into Post as props        
      */}
      <Post title={title} author={author} />
    </div>
  );
};

/*
  2. Make the Post component accept props
  3. Pass title to the Headline component as props
  4. Pass author to the Byline component as props
*/
const Post = props => {
  return (
    <article className="post">
      <Heading title={props.title} />
      <Byline author={props.author} />
    </article>
  );
};

/*
  5. Create a component named <Heading /> that accepts props
  6. Have it display an H1 with a title from props
*/
const Heading = props => {
  return <h1>{props.title}</h1>;
};

/*
  5. Create a component named <Byline /> that accepts props
  6. Have it display a p with the author
*/
const Byline = props => {
  return <p>By {props.author}</p>;
};
=======
/* 
  1. Setup UserForm to accept props
  2. Display the proper values from props where needed
*/
const UserForm = props => (
  <p>
    <label htmlFor="{props.id}">{props.label}</label>:
    <input id="{props.id}" type="text" onChange="{props.onChange}" />
  </p>
);

class Practice3 extends React.Component {
  state = {
    first: "First",
    last: "Last"
  };

  handleFirst = e => {
    this.setState({ first: e.target.value });
  };
  handleLast = e => {
    this.setState({ last: e.target.value });
  };

  render() {
    return (
      <>
        <h2>
          {this.state.first} {this.state.last}
        </h2>
        {/*
          3. Call <UserForm /> and pass in the following prop values
              id = "firstName"
              label = "First Name"
              onChange = handleFirst
          4. Call <UserForm /> again and pass in the following prop values
              id = "lastName"
              label = "Last Name"
              onChange = handleLast              
        */}
        <UserForm
          id="firstName"
          label="First Name"
          onChange={this.handleFirst}
        />
        <UserForm id="lastName" label="Last Name" onChange={this.handleLast} />
      </>
    );
  }
}
>>>>>>> 74218353dc52f5b37ffa26390f32a87e46d19bf3

export default Practice3;
