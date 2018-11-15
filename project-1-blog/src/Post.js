import React from "react";
const Post = ({ post }) => {
  console.log();
  return (
    <article>
      <h1>{post.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default Post;
