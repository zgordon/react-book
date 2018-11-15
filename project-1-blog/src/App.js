import React, { Component } from "react";

import Posts from "./Posts";
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
        id: 1,
        title: "Third Post",
        content: "Lorem"
      }
    ]
  };
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
