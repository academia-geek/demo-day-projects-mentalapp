import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import './style/css/index.css';

ReactDOM.render(
   <React.StrictMode>{/* <App /> */}</React.StrictMode>,
=======
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import "./style/css/index.css";

ReactDOM.render(
   <React.StrictMode>
      <Navbar />
      <Login />
   </React.StrictMode>,
>>>>>>> b39a9bc16424298186ebbd6ca2667f2e28cb2c19
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
