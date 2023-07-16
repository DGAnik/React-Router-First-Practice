import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h3>Here are {posts.length} the Posts</h3>
      {
        posts.map(post => <Post key={post.id} post={post}></Post>)
      }
    </div>
  );
};

export default Posts;