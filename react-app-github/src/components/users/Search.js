import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { SearchText: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form className="form">
          <input
            type="text"
            name="SearchText"
            placeholder="Search Users..."
            value={this.state.SearchText}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            onClick={this.handleSubmit}
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
