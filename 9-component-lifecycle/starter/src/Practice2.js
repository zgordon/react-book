import React from "react";

class Practice2 extends React.Component {
  state = {
    posts: [
      {
        id: 0,
        title: {
          rendered: "Default Post"
        }
      }
    ]
  };
  /* 
    1. Add the method componentDidMount()
    2. Call fetch("https://dev-react-explained-api.pantheonsite.io/wp-json/wp/v2/posts")
    3. Then call .json() on the response
    4. Take that and set it as the value of posts in state
    5  Add a catch to log out any errors
  */
  render() {
    return (
      <header>
        <h1>Posts</h1>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>{post.title.rendered}</li>
          ))}
        </ul>
      </header>
    );
  }
}

export default Practice2;
