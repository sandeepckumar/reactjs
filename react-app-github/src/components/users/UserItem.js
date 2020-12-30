import React, { Component } from "react";
import PropTypes from "prop-types";

export default class UserItem extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          className="round-img"
          style={{ width: "120px" }}
          alt=""
        />
        <h3>{login}</h3>
        <div>
          <a
            href={html_url}
            className="btn btn-dark btn-sm my-1"
            target="_blank"
            rel="noreferrer"
          >
            Github Profile
          </a>
        </div>
      </div>
    );
  }
}
