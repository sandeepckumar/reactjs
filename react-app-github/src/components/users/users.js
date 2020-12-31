import React, { Component } from "react";
import { UserItem } from "./";
import { Spinner } from "../layouts";

class Users extends Component {
  state = {};
  render() {
    const userStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gridGap: "1rem",
    };
    const { loading, users } = this.props;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div style={userStyle}>
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        )}
      </>
    );
  }
}

export default Users;
