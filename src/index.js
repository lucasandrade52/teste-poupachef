import React from "react";
import ReactDOM from "react-dom";
import Router from "./routes";
import "./global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);