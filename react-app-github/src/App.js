import "./App.css";
import React, { Component } from "react";
import { Navbar, Alert } from "./components/layouts/";
import { Users, Search } from "./components/users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        "https://api.github.com/users?client_id=<secret>&client_secret=<secret>"
      );
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
        `https://api.github.com/search/users?client_id=<secret>&client_secret=<secret>&q=${text}&per_page=30`
      );
      this.setState({ loading: false, users: response.data.items });
    } catch (error) {}
  };

  searchInUsers = (text) => {
    this.setState({ loading: true });
    const users = this.state.users.filter((u) => {
      return u.login.startsWith(text);
    });
    this.setState({ loading: false, users: users });
  };

  clearUsers = () => {
    this.setState({
      users: [],
    });
  };

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type,
      },
    });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length ? true : false}
            setAlert={this.setAlert}
            searchInUsers={this.searchInUsers}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
