import "./App.css";
import React from "react";
import { Navbar, Alert } from "./components/layouts";
import { Users, Search } from "./components/users";
import axios from "axios";

class App extends React.Component {
  state = { users: [], loading: false, alert: null };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const res = await axios.get("https://api.github.com/users");
      this.setState({ users: res.data, loading: false });
    } catch (error) {
      this.setState({ loading: false });
      this.setAlert("Error", "danger");
    }
  }

  searchUsers = async (text) => {
    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      this.setState({ users: res.data.items, loading: false });
    } catch (error) {
      this.setState({ loading: false });
      this.setAlert("Error", "danger");
    }
  };

  clearUsers = () => {
    this.setState({ users: [] });
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
    }, 3000);
  };

  render() {
    return (
      <div className="App">
        <Navbar title="GitHub APP" icon="fab fa-github" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0}
            setAlert={this.setAlert}
          />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
