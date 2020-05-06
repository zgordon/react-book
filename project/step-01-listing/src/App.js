import React, { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";

import "./App.css";

const App = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello React",
      content: "Lorem.",
    },
    {
      id: 2,
      title: "Hello Project",
      content: "Tothe.",
    },
    {
      id: 3,
      title: "Hello Blog",
      content: "Ipsum.",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Posts posts={posts} />
    </div>
  );
};

export default App;
