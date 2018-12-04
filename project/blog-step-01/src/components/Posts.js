import React from "react";

const Posts = ({ posts }) => {
  return (
    <article className="posts container">
      <h1>Posts</h1>
      <ul>
        {posts.length < 1 && <li key="new">No posts yet!</li>}
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Posts;
