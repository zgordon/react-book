import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import NotFound from "./components/NotFound";

import "./App.css";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        slug: "hello-react",
        title: "Hello React",
        content: "Lorem."
      },
      {
        id: 2,
        slug: "hello-project",
        title: "Hello Project",
        content: "Tothe."
      },
      {
        id: 3,
        slug: "hello-blog",
        title: "Hello Blog",
        content: "Ipsum."
      }
    ]
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Posts posts={this.state.posts} />}
            />
            <Route
              path="/post/:postSlug"
              render={props => {
                const post = this.state.posts.find(
                  post => post.slug === props.match.params.postSlug
                );
                if (post) return <Post post={post} />;
                else return <NotFound />;
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
