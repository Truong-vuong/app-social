import React from "react";

import "./FollowCard.css";
import FollowData from "../../Data/Follower.js";

const FollowCard = () => {
  return (
    <div className='FollowCard'>
      <h2>Can you know ...</h2>
      {FollowData.map((follower, index) => {
        return (
          <div className='FollowCard__item' key={index}>
            <div className='follower'>
              <img src={follower.img} alt='follower' />
              <div className='follower__name'>
                <span>{follower.name}</span>
                <span>{follower.username}</span>
              </div>
            </div>
            <button className='btn'>Follow</button>
          </div>
        );
      })}
      <div className='showmore'>
        <span>Show more</span>
      </div>
    </div>
  );
};

export default FollowCard;
