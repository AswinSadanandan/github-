import React, { Component } from "react";
import Useritem from "./useritem";
class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <Useritem key={user.id} user={user}></Useritem>
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1",
};

export default Users;
