import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppRouter } from "./router/AppRouter"
import { store } from "./redux/store/store";
import "./style/css/index.css"

ReactDOM.render(
   <Provider store={store}>
      <AppRouter />
   </Provider>,
   document.getElementById("root")
);

