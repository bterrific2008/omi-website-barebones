import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/componentindex";
import Main from "./Main";

function App({ t }) {
  return (
    <div>
      <Header />
      <Main t/>
    </div>
  );
}

export default App;
