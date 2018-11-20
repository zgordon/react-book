import React from "react";
import { Link } from "react-router-dom";

const PostsItem = ({ post }) => {
  return (
    <>
      <h3>
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
      </h3>
      <Link to={`/edit/${post.slug}`}>Edit</Link>
      {" | "}
      <Link to={`/delete/${post.key}`}>Delete</Link>
    </>
  );
};

export default PostsItem;
