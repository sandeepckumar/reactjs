import "./App.css";
import React from "react";
import { Navbar } from "./components/layouts";
import { Users } from "./components/users";
import axios from "axios";

class App extends React.Component {
  state = { users: [], loading: false };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar title="GitHub APP" icon="fab fa-github" />
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
