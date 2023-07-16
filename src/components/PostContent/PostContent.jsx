import React from "react";
import "./PostContent.css";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostContent = () => {
  const data = useLoaderData();
  const { body, title } = data;

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="body">
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default PostContent;
