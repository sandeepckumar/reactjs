import React, { Component } from "react";

export default class UserItem extends Component {
  state = {
    id: "44",
    login: "schenna",
    avatar_url:
      "https://avatars1.githubusercontent.com/u/68668283?s=460&u=18dec70d683de7e353194dbbb63fbfbc83a9b6c3&v=4",
    html_url: "https://github.com/mansoor-17",
  };
  render() {
    return (
      <div class="card text-center">
        <img
          src={this.state.avatar_url}
          className="round-img"
          style={{ width: "120px" }}
          alt=""
        />
        <h3>{this.state.login}</h3>
        <div>
          <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">
            Github Profile target="_blank" rel="noreferrer"
          </a>
        </div>
      </div>
    );
  }
}
