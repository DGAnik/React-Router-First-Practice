import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
  const {id, title, body} = post;
  return (
    <div className='post'>
      <h3>Title: <span className="title">{post.title}</span></h3>
      <p>Posting ID: {post.id}</p>
      <Link to={`/content/${id}`} className='read-button'>Read Now</Link>
      </div>
  );
};

export default Post;