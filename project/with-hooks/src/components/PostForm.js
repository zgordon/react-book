import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

const PostForm = (props) => {
  const defaultPost = {
    key: props.post.key,
    slug: props.post.slug,
    title: props.post.title,
    content: props.post.content,
  };

  const [post, setPost] = useState(defaultPost);
  const [saved, setSaved] = useState(false);

  const prevPostRef = useRef();
  useEffect(() => {
    prevPostRef.current = post;
  }, [post]);
  const prevPost = prevPostRef.current;

  const quillRef = React.useRef();
  useEffect(() => {
    if (prevPost && quillRef.current) {
      if (props.post.key !== prevPost.key) {
        setPost(defaultPost);
        quillRef.current.getEditor().setContents(``);
      }
    }
  }, [prevPost, props, defaultPost]);

  const handleAddNewPost = (event) => {
    event.preventDefault();
    if (post.title) {
      if (props.updatePost) {
        props.updatePost(post);
      } else {
        props.addNewPost(post);
      }
      setSaved(true);
    } else {
      alert("Title required");
    }
  };

  if (saved === true) {
    return <Redirect to="/" />;
  }
  return (
    <form className="container" onSubmit={handleAddNewPost}>
      <h1>Add a New Post</h1>
      <p>
        <label htmlFor="form-title">Title:</label>
        <br />
        <input
          defaultValue={props.title}
          id="form-title"
          value={post.title}
          onChange={(e) =>
            setPost({
              ...post,
              title: e.target.value,
            })
          }
        />
      </p>
      <p>
        <label htmlFor="form-content">Content:</label>
      </p>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        defaultValue={post.content}
        onChange={(content, delta, source, editor) => {
          console.log(editor.getContents());
          setPost({
            ...post,
            content: editor.getContents(),
          });
        }}
      />
      <p>
        <button type="submit">Save</button>
      </p>
    </form>
  );
};

export default PostForm;
