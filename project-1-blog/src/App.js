import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "./firebase";
// import SimpleStorage from "react-simple-storage";

import Header from "./Header";
import Message from "./Message";
import Posts from "./Posts";
import Post from "./Post";
import PostNewForm from "./PostNewForm";
import PostEditForm from "./PostEditForm";
import DeletePost from "./DeletePost";

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
    posts: [],
    updated: false,
    message: null
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
          {/* <SimpleStorage parent={this} /> */}
          <Header />
          {this.state.message && <Message type={this.state.message} />}
          <Route
            exact
            path="/"
            render={() => <Posts posts={this.state.posts} />}
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
            path="/new/"
            render={() => <PostNewForm addNewPost={this.addNewPost} />}
          />
          <Route
            path="/edit/:postSlug"
            render={props => (
              <PostEditForm
                postSlug={props.match.params.postSlug}
                updatePost={this.updatePost}
                deletePost={this.deletePost}
              />
            )}
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
