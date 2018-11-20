import React from "react";

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
const Post = props => (
  <article className="post">
    <Heading title={props.title} />
    <Byline author={props.author} />
  </article>
);

/*
  5. Create a component named <Heading /> that accepts props
  6. Have it display an H1 with a title from props
*/
const Heading = props => <h1>{props.title}</h1>;

/*
  5. Create a component named <Byline /> that accepts props
  6. Have it display a p with the author
*/
const Byline = props => <p>By {props.author}</p>;

export default Practice3;
