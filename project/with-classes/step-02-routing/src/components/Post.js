import React from "react";

const Post = ({ post }) => (
  <article className="post container">
    <h1>{post.title}</h1>
    <div>{post.content}</div>
  </article>
);

export default Post;
