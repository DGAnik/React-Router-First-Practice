import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="header">
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to="/contact">Contact</ActiveLink>
      <ActiveLink to="/">First</ActiveLink>
      <ActiveLink to="/friends">Friends</ActiveLink>
      <ActiveLink to="/posts">Posts</ActiveLink>
    </div>
  );
};

export default Header;
