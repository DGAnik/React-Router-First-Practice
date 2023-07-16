import React from "react";
import "./Home.css";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div className={navigation.state === "loading" ? " " : "not-loading"}>
        Loading
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
<h1>This is the home page</h1>;
