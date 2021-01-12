import "./App.css";
import React, { Component } from "react";
import { Navbar, Alert } from "./components/layouts/";
import { Users, Search, User } from "./components/users";
import About from "./components/pages/About.js";
import axios from "axios";
import { Router, Link, Switch } from "react-router-dom";

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
        "https://api.github.com/users?client_id=Iv1.f1ac53bac3afc76d&client_secret=ac5a818536e7be82388a8748a5d448b1f646d35d"
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
        `https://api.github.com/search/users?q=${text}&per_page=30&client_id=Iv1.f1ac53bac3afc76d&client_secret=ac5a818536e7be82388a8748a5d448b1f646d35d&`
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

  getUser = async (username) => {
    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=Iv1.f1ac53bac3afc76d&client_secret=ac5a818536e7be82388a8748a5d448b1f646d35d&`
      );
      this.setState({ user: res.data, loading: false });
    } catch (error) {
      console.log(error);
    }
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
          <Router exact path="/about" component={About} />
          <Router
            exact
            path="/user/:login"
            render={(props) => (
              <User
                getUser={this.getUser}
                loading={this.state.loading}
                user={this.state.user}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
