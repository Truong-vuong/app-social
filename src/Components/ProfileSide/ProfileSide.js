import React from "react";

import "./ProfileSide.css";
import Search from "../SearchBox/SearchBox";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowCard from "../FollowCard/FollowCard";

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <Search />
      <ProfileCard />
      <FollowCard />
    </div>
  );
};

export default ProfileSide;
