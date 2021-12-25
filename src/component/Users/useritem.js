import React from "react";
import PropTypes from "prop-types";
const useritem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" style={{ width: "60px" }} />
      <h3>{login}</h3>
      <a href={html_url} className="btn btn-dark btn-sn my-1">
        More
      </a>
    </div>
  );
};
// useritem.PropTypes = {
//   user: PropTypes.object.isRequired,
// };
export default useritem;
