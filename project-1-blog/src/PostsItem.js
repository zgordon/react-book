import React from "react";
import { Link } from "react-router-dom";

const PostsItem = ({ post }) => {
  return (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>|
      <Link to={`/edit/${post.id}`}>Edit</Link>
    </li>
  );
};

export default PostsItem;
