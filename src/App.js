import React, { Fragment, Component } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Users from "./component/Users/Users";
import Search from "./component/Users/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get("https://api.github.com/users");
  //   this.setState({ users: res.data, loading: false });
  //   // console.log(res.data);
  // }

  render() {
    const name = "aswin";
    return (
      <Fragment>
        <Navbar title="github finder" icon="fab fa-github" />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </Fragment>
    );
  }
}

export default App;
