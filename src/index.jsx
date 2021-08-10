import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import configureStore from "./redux/store/configureStore";
import initialState from "./redux/store/initialState";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(initialState)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
