import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Message from "./Message";
import Posts from "./Posts";
import Post from "./Post";
import NewPostForm from "./NewPostForm";
import EditPostForm from "./EditPostForm";
import DeletePost from "./DeletePost";

// import "./App.css";

class App extends Component {
  state = {
    posts: [],
    updated: false,
    message: null
  };
  addNewPost = post => {
    post.id = this.state.posts.length + 1;
    this.setState({
      posts: [...this.state.posts, post],
      message: "saved"
    });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  updatePost = updatedPost => {
    const postIndex = this.state.posts.findIndex(
      post => post.id === updatedPost.id
    );
    const newPosts = [...this.state.posts];
    newPosts.splice(postIndex, 1);
    newPosts.push(updatedPost);
    newPosts.sort(function(a, b) {
      return a.id - b.id || a.title.localeCompare(b.title);
    });

    this.setState({ posts: newPosts, message: "updated" });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  deletePost = deletedPostId => {
    const postIndex = this.state.posts.findIndex(
      post => post.id === deletedPostId
    );
    const newPosts = [...this.state.posts];
    newPosts.splice(postIndex, 1);

    this.setState({ posts: newPosts, message: "deleted" });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  componentDidMount() {}
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {this.state.message && <Message type={this.state.message} />}
          <Route
            exact
            path="/"
            render={() => <Posts posts={this.state.posts} />}
          />
          <Route
            path="/new/"
            render={() => <NewPostForm addNewPost={this.addNewPost} />}
          />
          <Route
            path="/edit/:postId"
            render={props => (
              <EditPostForm
                post={this.state.posts.find(
                  post => post.id === parseInt(props.match.params.postId)
                )}
                updatePost={this.updatePost}
                deletePost={this.deletePost}
              />
            )}
          />
          <Route
            path="/delete/:postId"
            render={props => (
              <DeletePost
                postId={props.match.params.postId}
                deletePost={this.deletePost}
              />
            )}
          />
          <Route
            path="/post/:postId"
            render={props => (
              <div>
                <Post
                  post={this.state.posts.find(
                    post => post.id === parseInt(props.match.params.postId)
                  )}
                />
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}
export default App;
