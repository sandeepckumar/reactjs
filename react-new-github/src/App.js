import "./App.css";
import React from "react";
import { Navbar } from "./components/layouts";
import { UserItem } from "./components/users";

class App extends React.Component {
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
