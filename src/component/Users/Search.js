import React, { Component } from "react";
import axios from "axios";
export class Search extends Component {
  state = {
    text: "",
  };
  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = () => {
    this.setState({ loading: true });
    const res = axios.get(
      `https://api.github.com/search/users/?q=${this.state.text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            type="text"
            name="text"
            placeholder="Search users...."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            onClick={this.onSubmit}
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
