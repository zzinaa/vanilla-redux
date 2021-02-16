import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";

ReactDOM.render(
  //redux store와 연결함
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
