import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

class Post extends React.Component {
  state = {
    date: moment().format("MM/DD/YYYY")
  };
  render() {
    return (
      <div>
        <h1>Title</h1>
        <p>Posted {this.state.date}</p>
      </div>
    );
  }
}

const rootContainer = document.getElementById("root");
ReactDOM.render(<Post />, rootContainer);
