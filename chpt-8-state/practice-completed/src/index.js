import React from "react";
import ReactDOM from "react-dom";

<<<<<<< HEAD
import App from "./App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
=======
import Practice1 from "./Practice1";
// import Practice2 from "./Practice2";
// import Practice3 from "./Practice3";
// import Practice4 from "./Practice4";
// import Practice5 from "./Practice5";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Practice1 />, document.getElementById("root"));
>>>>>>> 74218353dc52f5b37ffa26390f32a87e46d19bf3

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
