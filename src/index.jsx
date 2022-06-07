import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home/Home"
import '../src/index.css'
import Header from '../src/components/Header/Header'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);