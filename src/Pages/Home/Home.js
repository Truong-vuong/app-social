import React from "react";

import "./Home.css";
import ProfileSide from "../../Components/ProfileSide/ProfileSide";
import PostSide from "../../Components/PostSide/PostSide";
import RightSide from "../../Components/RightSide/RightSide";

const Home = () => {
  return (
    <div>
      <div className='Home'>
        <ProfileSide />
        <PostSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
