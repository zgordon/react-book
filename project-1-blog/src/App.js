import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Posts from "./Posts";
import Post from "./Post";
import NewPostForm from "./NewPostForm";
// import "./App.css";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "First Post",
        content: "Lorem"
      },
      {
        id: 2,
        title: "Second Post",
        content: "Lorem"
      },
      {
        id: 3,
        title: "Third Post",
        content: "Lorem"
      }
    ]
  };
  addNewPost = post => {
    post.id = this.state.posts.length + 1;
    this.setState({ posts: [...this.state.posts, post] });
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
