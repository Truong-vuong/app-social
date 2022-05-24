import React from "react";

import "./Post.css";
import Like from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";

const Post = ({ post }) => {
  return (
    <div className='Post'>
      <div className='post__image'>
        <img src={post.img} alt='post' />
      </div>
      <div className='post__react'>
        <img src={post.liked ? Like : NotLike} alt='like' />
        <img src={Comment} alt='comment' />
        <img src={Share} alt='share' />
      </div>
      <div className='post__countlike'>
        <span>{post.likes}</span>
        <span>likes</span>
      </div>
      <div className='post__info'>
        <span>{post.name}</span>
        <span>{post.desc}</span>
      </div>
    </div>
  );
};

export default Post;
