import "./App.css";
import React, { Component } from "react";
import { Navbar } from "./components/layouts/";
import { Users } from "./components/users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios.get("https://api.github.com/users");
      this.setState({ loading: false, users: response.data });
      console.log(response.data);
    } catch (error) {
      throw error;
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
