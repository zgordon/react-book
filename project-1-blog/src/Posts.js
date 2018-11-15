import React from "react";
import PostsItem from "./PostsItem";
const Posts = ({ posts }) => {
  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <PostsItem key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default Posts;
