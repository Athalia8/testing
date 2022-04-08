import React, { Component } from "react";
import GameBody from "../../components/games/rps/Body";
// import NavbarComponent from "../components/include/Navbar";
// import Footer from "../components/include/Footer";
import Layout from "../../components/layouts/Layout";

class RPS extends Component {
  state = { isAuthenticated: false, email: "", uid: "", username: "" };
  componentWillMount() {
    this.checkUser();
  }

  checkUser = () => {
    const token = localStorage.getItem("token");
    if (!!token) {
      return this.setState({
        isAuthenticated: true,
        email: localStorage.getItem("email"),
        uid: localStorage.getItem("uid"),
        username: localStorage.getItem("username"),
      });
    }
  };

  render() {
    const { isAuthenticated, email, uid, username } = this.state;

    if (!isAuthenticated) {
      window.location = "/login";
    }
    return (
      <div>
        <Layout title="RPS">
          <GameBody data={{ email: email, uid: uid, username: username }}></GameBody>
        </Layout>
      </div>
    );
  }
}

export default RPS;
