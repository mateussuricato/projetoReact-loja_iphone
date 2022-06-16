import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import "../src/index.css";
import {Toaster} from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={true} />
    <Home />
  </React.StrictMode>
);
