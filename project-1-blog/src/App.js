import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Posts from "./Posts";
import Post from "./Post";
import NewPostForm from "./NewPostForm";
import EditPostForm from "./EditPostForm";
// import "./App.css";

class App extends Component {
  state = {
    posts: []
  };
  addNewPost = post => {
    post.id = this.state.posts.length + 1;
    this.setState({ posts: [...this.state.posts, post] });
  };
  updatePost = updatedPost => {
    const postIndex = this.state.posts.findIndex(
      post => post.id === updatedPost.id
    );
    const newPosts = this.state.posts;
    newPosts.splice(postIndex, 1);
    newPosts.push(updatedPost);
    newPosts.sort(function(a, b) {
      return a.id - b.id || a.title.localeCompare(b.title);
    });

    this.setState({ posts: newPosts });
  };
  componentDidMount() {}
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
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
