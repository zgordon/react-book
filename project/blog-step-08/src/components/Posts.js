import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts, deletePost, authenticated }) => (
  <article className="posts container">
    <h1>Posts</h1>
    <ul>
      {posts.length < 1 && <li key="new">No posts yet!</li>}
      {posts.map(post => (
        <li key={post.id}>
          <h2>
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
          </h2>
          {authenticated && (
            <p>
              <Link to={`/edit/${post.slug}`}>Edit</Link>
              {" | "}
              <button
                className="linkLike"
                onClick={e => {
                  e.preventDefault();
                  deletePost(post);
                }}
              >
                Delete
              </button>
            </p>
          )}
        </li>
      ))}
    </ul>
  </article>
);

export default Posts;
