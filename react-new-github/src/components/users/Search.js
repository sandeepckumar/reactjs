import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  changeHandler = (e) => {
    this.setState({ text: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      return this.props.setAlert("Invalid Input", "danger");
    }
    this.props.searchUsers(this.state.text);
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.submitHandler}>
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            value={this.state.text}
            onChange={this.changeHandler}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.showclear && (
          <button
            className="btn btn-light btn-block"
            onClick={() => {
              this.props.clearUsers();
            }}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
