import React from "react";

import "./ProfileLeft.css";
import SearchBox from "../SearchBox/SearchBox";
import Info from "../Info/Info";
import FollowCard from "../FollowCard/FollowCard";

const ProfileLeft = () => {
  return (
    <div className='ProfileLeft'>
      <SearchBox />
      <Info />
      <FollowCard />
    </div>
  );
};

export default ProfileLeft;
