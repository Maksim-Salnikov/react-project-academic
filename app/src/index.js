import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState);

store.subscriber(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
