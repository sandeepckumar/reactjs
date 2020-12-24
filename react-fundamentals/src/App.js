import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
