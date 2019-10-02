import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/componentindex";
import Main from "./Main";
import { translate, Trans } from 'react-i18next';

function App({ t }) {
  return (
    <div>
      <Header />
      <Main/>
    </div>
  );
}

export default translate('common')(App);
