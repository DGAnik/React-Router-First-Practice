import React from 'react';
import './PostContent.css'
import { useLoaderData } from 'react-router-dom';

const PostContent = () => {
const data = useLoaderData();
const {body, title} = data;
console.log(data)
  
  return (
    <div className='body'>
      <h3>{title}</h3>
      <p>{body}</p>

    </div>
  );
};

export default PostContent;