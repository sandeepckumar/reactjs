import "./App.css";
import React, { Component } from "react";
import { Navbar } from "./components/layouts/";
import { UserItem } from "./components/users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
