import React from "react";
import propTypes from "prop-types";

const UserItem = ({ user: { login, html_url, avatar_url } }) => {
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
};

UserItem.propTypes = {
  user: propTypes.object.isRequired,
};

export default UserItem;
