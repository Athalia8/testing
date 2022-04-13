import React, { useState, useEffect } from "react";
import GameBody from "../../components/games/rps/Body";
// import NavbarComponent from "../components/include/Navbar";
// import Footer from "../components/include/Footer";
import Layout from "../../components/layouts/Layout";

const RPS = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (!token) {
      //console.log("tes");
      Router.push("/auth/login");
    } else {
      setEmail(user.email);
      setDisplayName(user.username);
      setUid(localStorage.getItem("uid"));
    }
  }, []);
  return (
    <div>
      <Layout title="RPS">
        <GameBody data={{ email: email, uid: uid, username: displayName }}></GameBody>
      </Layout>
    </div>
  );
};

export default RPS;
