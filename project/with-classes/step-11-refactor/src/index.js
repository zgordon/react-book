import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import appService from "./appService";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <App appService={appService} />,
  document.getElementById("root")
);

serviceWorker.unregister();
