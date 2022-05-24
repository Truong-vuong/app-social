import React from "react";
import { Link } from "react-router-dom";

import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import ProfileCardImg from "../../img/profileImg.jpg";

const ProfileCard = () => {
  const profilePage = true;

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
        <span></span>
        {profilePage && (
          <div className='profileCard__follow__item'>
            <span>5</span>
            <span>Posts</span>
          </div>
        )}
      </div>
      <hr />
      <div className='profileCard__link'>
        <Link to='/profile'>
          <span>My Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
