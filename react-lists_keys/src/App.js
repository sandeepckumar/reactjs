import React, { Component } from "react";
import axios from "axios";
import Table from "./components/table";

class App extends Component {
  constructor() {
    super();
    this.state = { list: [] };
  }
  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://api.github.com/users?client_id=Iv1.f1ac53bac3afc76d&client_secret=16171646a84b3030d6c22489b62553c06158f974"
      );
      this.setState({ list: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Table list={this.state.list} />
      </div>
    );
  }
}

export default App;
