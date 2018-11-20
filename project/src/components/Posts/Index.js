import React from "react";
import { Link } from "react-router-dom";
import PostsItem from "./Item";
const Posts = ({ posts, authenticated }) => {
  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.length < 1 && (
          <li key="new">
            <Link to="/new/">Add your first post!</Link>
          </li>
        )}
        {posts.map(post => (
          <li key={post.slug}>
            <PostsItem post={post} authenticated={authenticated} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
