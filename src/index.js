import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandPage from "./pages/land-page";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const app = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LandPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
