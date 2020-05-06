import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import NotFound from "./components/NotFound";

import "./App.css";

const App = (props) => {
  const [posts, setPosts] = useState([]);

  const addNewPost = (post) => {
    post.id = posts.length + 1;
    post.slug = encodeURIComponent(
      post.title.toLowerCase().split(" ").join("-")
    );
    setPosts([...posts, post]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Posts posts={posts} />} />
          <Route
            path="/post/:postSlug"
            render={(props) => {
              const post = posts.find(
                (post) => post.slug === props.match.params.postSlug
              );
              return <Post post={post} />;
            }}
          />
          <Route
            exact
            path="/new"
            render={() => <PostForm addNewPost={addNewPost} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
