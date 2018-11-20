import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import firebase from "./firebase";
import SimpleStorage from "react-simple-storage";

import Header from "./components/Header";
import Login from "./components/Auth/Login";
import Message from "./components/Message";
import Posts from "./components/Posts/Index";
import Post from "./components/Post/Index";
import PostNewForm from "./components/Form/New";
import PostEditForm from "./components/Form/Edit";
import DeletePost from "./components/Post/Delete";

// import "./App.css";
const getSlugFromTitle = title => {
  const slug = encodeURIComponent(
    title
      .toLowerCase()
      .split(" ")
      .join("-")
  );
  return slug;
};

class App extends Component {
  state = {
    authenticated: false,
    posts: [],
    updated: false,
    message: null
  };

  onLogin = ({ email, password }) => {
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ authenticated: true });
      })
      .catch(error => console.log(error.message));
  };

  onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ authenticated: false });
      })
      .catch(error => {
        console.error(error);
      });
  };

  addNewPost = post => {
    const postsRef = firebase.database().ref("posts");
    post.slug = getSlugFromTitle(post.title);
    postsRef.push(post);
    this.setState({
      posts: [...this.state.posts, post],
      message: "saved"
    });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };

  updatePost = updatedPost => {
    const postRef = firebase.database().ref("posts/" + updatedPost.key);
    postRef.update({
      slug: getSlugFromTitle(updatedPost.title),
      title: updatedPost.title,
      content: updatedPost.content
    });
    this.setState({ message: "updated" });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };

  deletePost = deletedPost => {
    console.log(deletedPost);
    const postRef = firebase.database().ref("posts/" + deletedPost);
    postRef.remove();
    this.setState({ message: "deleted" });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };

  componentDidMount() {
    const postsRef = firebase.database().ref("posts");
    postsRef.on("value", snapshot => {
      const firebasePosts = snapshot.val();
      const newState = [];
      for (let post in firebasePosts) {
        newState.push({
          key: post,
          // id: firebasePosts[post].id,
          slug: firebasePosts[post].slug,
          title: firebasePosts[post].title,
          content: firebasePosts[post].content
        });
      }
      this.setState({
        posts: newState
      });
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <SimpleStorage parent={this} />
          <Header
            authenticated={this.state.authenticated}
            onLogout={this.onLogout}
          />
          {this.state.message && <Message type={this.state.message} />}
          <Route
            exact
            path="/"
            render={() => (
              <Posts
                posts={this.state.posts}
                authenticated={this.state.authenticated}
              />
            )}
          />
          <Route
            path="/post/:postSlug"
            render={props => {
              console.log(this.state.posts);
              const post = this.state.posts.find(
                post => post.slug === props.match.params.postSlug
              );
              return <div>{post && <Post post={post} />}</div>;
            }}
          />
          <Route
            exact
            path="/login/"
            render={() => {
              if (this.state.authenticated) {
                return <Redirect to="/" />;
              } else {
                return <Login onLogin={this.onLogin} />;
              }
            }}
          />
          <Route
            path="/new/"
            render={() => {
              if (this.state.authenticated) {
                return <PostNewForm addNewPost={this.addNewPost} />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route
            path="/edit/:postSlug"
            render={props => {
              if (this.state.authenticated) {
                return (
                  <PostEditForm
                    postSlug={props.match.params.postSlug}
                    updatePost={this.updatePost}
                    deletePost={this.deletePost}
                  />
                );
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route
            path="/delete/:postSlug"
            render={props => (
              <DeletePost
                postSlug={props.match.params.postSlug}
                deletePost={this.deletePost}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
export default App;
