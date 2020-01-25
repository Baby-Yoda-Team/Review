import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import './components/style.js'

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);