import React from "react";
import './Friend.css'
import { Link } from "react-router-dom";
const Friend = ({ friend }) => {
  const { email, id, name, phone, username, website } = friend;
  return (
    <div className="friend">
      <h3>{name}</h3>
      <h3>{phone}</h3>
      <h4>{email}</h4>
      <Link to={`/friend/${id}`} className="detail">Details</Link>
    </div>
  );
};

export default Friend;
