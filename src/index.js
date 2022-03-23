import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { AppRouter } from "./router/AppRouter";
import "./style/css/index.css"

ReactDOM.render(
   <Provider store={store}>
      <AppRouter />
   </Provider>,
   document.getElementById("root")
);

