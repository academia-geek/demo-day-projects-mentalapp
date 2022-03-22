import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import "./style/css/index.css";

ReactDOM.render(
   <React.StrictMode>
      <Navbar />
      <Login />
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
