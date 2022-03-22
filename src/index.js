import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./router/AppRouter";
import { store } from "./redux/store/store";

ReactDOM.render(
   <Provider store={store}>
      <AppRouter />
   </Provider>,
   document.getElementById("root")
);

