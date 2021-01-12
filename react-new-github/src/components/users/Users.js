import UserItem from "./Useritem";
import React from "react";
import { Spinner } from "../layouts";
import PropTypes from "prop-types";

const Users = (props) => {
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
  };
  return (
    <>
      {props.loading ? (
        <Spinner />
      ) : (
        <div style={userStyle}>
          {props.users.map((user) => (
            <UserItem
              login={user.login}
              html_url={user.html_url}
              avatar_url={user.avatar_url}
              key={user.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

UserItem.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
};

export default Users;
