import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class DeletePost extends Component {
  state = {
    isDeleted: false,
    isCanceled: false
  };
  componentDidMount() {
    if (window.confirm("Delete this post?")) {
      this.props.deletePost(this.props.postId);
      this.setState({ isDeleted: true });
    } else {
      this.setState({ isCanceled: true });
    }
  }
  render() {
    if (this.state.isDeleted === true || this.state.isCanceled === true) {
      return <Redirect to="/" />;
    }
    return <p>Delete {this.props.postId}</p>;
  }
}
export default DeletePost;
