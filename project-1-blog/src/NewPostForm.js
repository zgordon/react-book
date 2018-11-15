import React, { Component } from "react";

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
        <textarea
          id="form-content"
          value={this.state.content}
          onChange={e => this.setState({ content: e.target.value })}
          style={{ height: "6rem", minWidth: "12rem" }}
        />
        <p>
          <button type="submit">Save</button>
        </p>
      </form>
    );
  }
}
export default NewPostForm;
