import React from "react";

import "./Profile.css";
import ProfileLeft from "../../Components/ProfileLeft/ProfileLeft";
import PostShare from "../../Components/PostShare/PostShare";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import RightSide from "../../Components/RightSide/RightSide";
import Posts from "../../Components/Posts/Posts";

const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft />
      <div className='profile__center'>
        <PostShare />
        <ProfileCard />
        <Posts />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
