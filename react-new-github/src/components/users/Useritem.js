import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { html_url, avatar_url, login } = this.props;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "120px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            Github Profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
