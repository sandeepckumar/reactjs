import "./App.css";
import React, { Component } from "react";
import { Navbar } from "./components/layouts/";
import { Users, Search } from "./components/users";

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

  searchUsers = async (text) => {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        `https://api.github.com/search/users?q=${text}&per_page=30`
      );
      this.setState({ loading: false, users: response.data.items });
    } catch (error) {}
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
