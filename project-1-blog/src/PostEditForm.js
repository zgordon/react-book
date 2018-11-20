import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import firebase from "./firebase";
import Quill from "react-quill";
import { forEach } from "@firebase/util";

class EditPostForm extends Component {
  state = {
    key: "",
    title: "",
    content: "",
    updated: false,
    isQuillLoaded: false
  };
  handleUpdatePost = e => {
    e.preventDefault();
    this.props.updatePost({
      key: this.state.key,
      title: this.state.title,
      content: this.state.content
    });
    this.setState({ updated: true });
  };
  componentDidMount() {
    // firebase.database().ref("posts"));
    console.log(this.props.postSlug);
    const postRef2 = firebase
      .database()
      .ref("posts")
      .orderByChild("slug")
      .equalTo(this.props.postSlug)
      // .limitToFirst(1)
      .once("value")
      .then(snapshot => {
        snapshot.forEach(post => {
          // console.log(post.val().title);
          this.setState({
            key: post.key,
            title: post.val().title,
            content: post.val().content,
            isQuillLoaded: true
          });
        });
        console.log(this.state);
      });
  }
  render() {
    if (this.state.updated === true) {
      return <Redirect to="/" />;
    }
    return (
      <form onSubmit={this.handleUpdatePost}>
        <h1>Edit Post</h1>
        <p>
          <label htmlFor="form-title">Title:</label>
          <br />
          <input
            id="form-title"
            value={this.state.title}
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
          />
        </p>
        <p>
          <label htmlFor="form-content">Content:</label>
        </p>
        {this.state.isQuillLoaded && (
          <Quill
            defaultValue={this.state.content}
            onChange={(content, delta, source, editor) => {
              this.setState({ content: editor.getContents() });
            }}
          />
        )}
        <p>
          <button type="submit">Save</button>
        </p>
      </form>
    );
  }
}
export default EditPostForm;
