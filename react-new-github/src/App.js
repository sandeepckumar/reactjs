import "./App.css";
import React from "react";
import { Navbar } from "./components/layouts";
import { Users } from "./components/users";

class App extends React.Component {
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
