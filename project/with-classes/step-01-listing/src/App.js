import React, { Component } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";

import "./App.css";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Hello React",
        content: "Lorem."
      },
      {
        id: 2,
        title: "Hello Project",
        content: "Tothe."
      },
      {
        id: 3,
        title: "Hello Blog",
        content: "Ipsum."
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
