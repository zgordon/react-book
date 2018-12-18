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
    authenticated: false,
    posts: [],
    message: null
  };
  onLogin = (email, password) => {
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ authenticated: true });
      })
      .catch(error => console.error(error));
  };
  onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ authenticated: false });
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
    const postsRef = firebase.database().ref("posts");
    post.slug = this.getNewSlugFromTitle(post.title);
    delete post.key;
    postsRef.push(post);
    this.setState({
      message: "saved"
    });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  updatePost = updatedPost => {
    const postRef = firebase.database().ref("posts/" + updatedPost.key);
    postRef.update({
      slug: this.getNewSlugFromTitle(updatedPost.title),
      title: updatedPost.title,
      content: updatedPost.content
    });

    this.setState({ message: "updated" });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  deletePost = deletedPost => {
    if (window.confirm("Delete this post?")) {
      const postRef = firebase.database().ref("posts/" + deletedPost.key);
      postRef.remove();
      const index = this.state.posts.findIndex(p => p.key === deletedPost.key);
      const posts = this.state.posts
        .slice(0, index)
        .concat(this.state.posts.slice(index + 1));
      this.setState({ posts, message: "deleted" });
      setTimeout(() => {
        this.setState({ message: null });
      }, 1600);
    }
  };
  componentDidMount() {
    const postsRef = firebase.database().ref("posts");
    postsRef.on("value", snapshot => {
      const firebasePosts = snapshot.val();
      const newState = [];
      for (let post in firebasePosts) {
        newState.push({
          key: post,
          slug: firebasePosts[post].slug,
          title: firebasePosts[post].title,
          content: firebasePosts[post].content
        });
        this.setState({ posts: newState });
      }
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          {/* <SimpleStorage parent={this} /> */}
          <Header
            authenticated={this.state.authenticated}
            onLogout={this.onLogout}
          />
          {this.state.message && <Message type={this.state.message} />}
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Posts
                  authenticated={this.state.authenticated}
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
                !this.state.authenticated ? (
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
                this.state.authenticated ? (
                  <PostForm
                    addNewPost={this.addNewPost}
                    post={{ key: null, slug: "", title: "", content: "" }}
                  />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/edit/:postSlug"
              render={props => {
                const post = this.state.posts.find(
                  post => post.slug === props.match.params.postSlug
                );
                if (post) {
                  return <PostForm updatePost={this.updatePost} post={post} />;
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
