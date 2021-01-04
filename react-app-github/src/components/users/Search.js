import React, { Component } from "react";
import propTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { SearchText: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    searchUsers: propTypes.func.isRequired,
    clearUsers: propTypes.func.isRequired,
    showClear: propTypes.bool.isRequired,
    setAlert: propTypes.func.isRequired,
    searchInUsers: propTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.searchInUsers(e.target.value);
    // this.props.searchUsers(this.state.SearchText);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.SearchText === "") {
      return this.props.setAlert("Invalid Search String", "danger");
    }
    this.props.searchUsers(this.state.SearchText);
  };

  render() {
    const { showClear, clearUsers } = this.props;
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
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
