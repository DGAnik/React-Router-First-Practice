import React from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();
  const readhere = () => {
    navigate(`/content/${id}`);
  };

  return (
    <div className="post">
      <h3>
        Title: <span className="title">{post.title}</span>
      </h3>
      <p>Posting ID: {post.id}</p>
      <Link to={`/content/${id}`} className="read-button">
        Read Now
      </Link>
      <button onClick={readhere}>Read Here</button>
    </div>
  );
};

export default Post;
