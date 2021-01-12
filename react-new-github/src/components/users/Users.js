import UserItem from "./Useritem";
import React, { Component } from "react";
import { Spinner } from "../layouts";

class Users extends Component {
  render() {
    const userStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gridGap: "1rem",
    };
    return (
      <>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div style={userStyle}>
            {this.props.users.map((user) => (
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
  }
}

export default Users;
