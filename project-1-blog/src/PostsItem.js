import React from "react";
import { Link } from "react-router-dom";

const PostsItem = ({ post }) => {
  return (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  );
};

export default PostsItem;
