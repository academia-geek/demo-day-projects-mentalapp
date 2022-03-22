import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import "./style/css/index.css"

ReactDOM.render(
   <Provider store={store}>
      <AppRouter />
   </Provider>,
   document.getElementById("root")
);

