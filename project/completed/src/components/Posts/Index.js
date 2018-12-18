import React from "react";
import { Link } from "react-router-dom";
import PostsItem from "./Item";
const Posts = ({ posts, authenticated }) => {
  return (
    <article className="posts">
      <h2>Posts</h2>
      <ul>
        {posts.length < 1 && <li key="empty">No posts yet!</li>}
        {posts.map(post => (
          <li key={post.slug}>
            <PostsItem post={post} authenticated={authenticated} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Posts;
