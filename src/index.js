import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const routing = (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
