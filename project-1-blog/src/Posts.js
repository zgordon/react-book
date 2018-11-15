import React from "react";
import PostsItem from "./PostsItem";
const Posts = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <PostsItem post={post} />
      ))}
    </ul>
  );
};

export default Posts;
