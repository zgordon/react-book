import React from "react";

const Practice3 = () => {
  const title = "Hello World";
  const author = "Zac Gordon";
  return (
    <div className="practice">
      {/* 
        1. Pass title and author into Post as props        
      */}
      <Post />
    </div>
  );
};

/*
  2. Make the Post component accept props
  3. Pass title to the Heading component as props
  4. Pass author to the Byline component as props
*/
const Post = () => (
  <article className="post">Add Header and Byline here</article>
);

/*
  5. Create a component named <Heading /> that accepts props
  6. Have it display an H1 with a title from props
*/

/*
  5. Create a component named <Byline /> that accepts props
  6. Have it display a p with the author
*/

export default Practice3;
