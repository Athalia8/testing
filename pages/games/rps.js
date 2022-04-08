import React, { Component } from "react";
import GameBody from "../../components/games/rps/Body";
// import NavbarComponent from "../components/include/Navbar";
// import Footer from "../components/include/Footer";
import Layout from "../../components/layouts/Layout";

const RPS = () => {
  return (
    <div>
      <Layout title="RPS">
        <GameBody data={{ email: "ame@ame.com", uid: "zrr61FqsTRZk2H8UJuxdw9XUWlJ2", username: "Yun" }}></GameBody>
      </Layout>
    </div>
  );
};

export default RPS;
