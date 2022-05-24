import React from "react";

import "./Posts.css";
import PostData from "../../Data/PostData";
import Post from "../Post/Post";

const Posts = () => {
  return (
    <div className='Posts'>
      {PostData.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
