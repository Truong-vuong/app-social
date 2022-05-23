import React from "react";

import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import ProfileCardImg from "../../img/profileImg.jpg";

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
      <div className='profileCard__image'>
        <img src={Cover} alt='cover' />
        <img src={ProfileCardImg} alt='profileImg' />
      </div>
      <div className='profileCard__info'>
        <span>Truong Vuong</span>
        <span>Fresher Frontend Developer</span>
      </div>
      <hr />
      <div className='profileCard__follow'>
        <div className='profileCard__follow__item'>
          <span>10,000</span>
          <span>Follower</span>
        </div>
        <span></span>
        <div className='profileCard__follow__item'>
          <span>10</span>
          <span>Following</span>
        </div>
      </div>
      <hr />
      <div className='profileCard__link'>
        <span>My Profile</span>
      </div>
    </div>
  );
};

export default ProfileCard;
