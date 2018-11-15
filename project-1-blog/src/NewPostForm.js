import React, { Component } from "react";
import Quill from "react-quill";

class NewPostForm extends Component {
  state = {
    title: "",
    content: "",
    saved: false
  };
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState, this.state);
  }
  handleAddNewPost = e => {
    e.preventDefault();
    this.props.addNewPost({
      title: this.state.title,
      content: this.state.content
    });
    this.setState({ title: "", content: "", saved: true });
    setTimeout(() => {
      this.setState({ saved: false });
    }, 1600);
  };
  render() {
    return (
      <form onSubmit={this.handleAddNewPost}>
        <h1>Add a New Post</h1>
        {this.state.saved && (
          <p style={{ color: "green" }}>
            <strong>Post Saved!</strong>
          </p>
        )}
        <p>
          <label htmlFor="form-title">Title:</label>
          <br />
          <input
            id="form-title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </p>
        <p>
          <label htmlFor="form-content">Content:</label>
        </p>
        <Quill
          value={this.state.content}
          onChange={content => this.setState({ content })}
        />
        <p>
          <button type="submit">Save</button>
        </p>
      </form>
    );
  }
}
export default NewPostForm;
