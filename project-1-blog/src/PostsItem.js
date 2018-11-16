import React from "react";
import { Link } from "react-router-dom";

const PostsItem = ({ post }) => {
  return (
    <li key={post.id}>
      <h3>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h3>
      <Link to={`/edit/${post.id}`}>Edit</Link>
      {" | "}
      <Link to={`/delete/${post.id}`}>Delete</Link>
    </li>
  );
};

export default PostsItem;
