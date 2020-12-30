import "./App.css";
import React, { Component } from "react";
import { Navbar } from "./components/layouts/";
import { Users } from "./components/users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
