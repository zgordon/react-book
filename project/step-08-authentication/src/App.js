import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import firebase from "./firebase";
import SimpleStorage from "react-simple-storage";

import Header from "./components/Header";
import Message from "./components/Message";
import Posts from "./components/Posts";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

import "./App.css";

class App extends Component {
  state = {
    isAuthenticated: false,
    posts: [],
    message: null
  };
  onLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ isAuthenticated: true });
      })
      .catch(error => console.error(error));
  };
  onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ isAuthenticated: false });
      })
      .catch(error => console.error(error));
  };
  getNewSlugFromTitle = title =>
    encodeURIComponent(
      title
        .toLowerCase()
        .split(" ")
        .join("-")
    );
  addNewPost = post => {
    post.id = this.state.posts.length + 1;
    post.slug = this.getNewSlugFromTitle(post.title);
    this.setState({
      posts: [...this.state.posts, post],
      message: "saved"
    });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  updatePost = post => {
    post.slug = this.getNewSlugFromTitle(post.title);
    const index = this.state.posts.findIndex(p => p.id === post.id);
    const posts = this.state.posts
      .slice(0, index)
      .concat(this.state.posts.slice(index + 1));
    const newPosts = [...posts, post].sort((a, b) => a.id - b.id);
    this.setState({ posts: newPosts, message: "updated" });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  deletePost = post => {
    if (window.confirm("Delete this post?")) {
      const index = this.state.posts.findIndex(p => p.id === post.id);
      const posts = this.state.posts
        .slice(0, index)
        .concat(this.state.posts.slice(index + 1));
      this.setState({ posts, message: "deleted" });
      setTimeout(() => {
        this.setState({ message: null });
      }, 1600);
    }
  };
  render() {
    return (
      <Router>
        <div className="App">
          <SimpleStorage parent={this} />
          <Header
            isAuthenticated={this.state.isAuthenticated}
            onLogout={this.onLogout}
          />
          {this.state.message && <Message type={this.state.message} />}
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Posts
                  isAuthenticated={this.state.isAuthenticated}
                  posts={this.state.posts}
                  deletePost={this.deletePost}
                />
              )}
            />
            <Route
              path="/post/:postSlug"
              render={props => {
                const post = this.state.posts.find(
                  post => post.slug === props.match.params.postSlug
                );
                if (post) {
                  return <Post post={post} />;
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
            <Route
              exact
              path="/login"
              render={() =>
                !this.state.isAuthenticated ? (
                  <Login onLogin={this.onLogin} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              exact
              path="/new"
              render={() =>
                this.state.isAuthenticated ? (
                  <PostForm
                    addNewPost={this.addNewPost}
                    post={{ id: 0, slug: "", title: "", content: "" }}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/edit/:postSlug"
              render={props => {
                const post = this.state.posts.find(
                  post => post.slug === props.match.params.postSlug
                );
                if (post && this.state.isAuthenticated) {
                  return <PostForm updatePost={this.updatePost} post={post} />;
                } else if (post && !this.state.isAuthenticated) {
                  return <Redirect to="/login" />;
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
