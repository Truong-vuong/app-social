import React from "react";

import "./Home.css";
import ProfileSide from "../../Components/ProfileSide/ProfileSide";
import PostSide from "../../Components/PostSide/PostSide";

const Home = () => {
  return (
    <div>
      <div className='Home'>
        <ProfileSide />
        <PostSide />
        <div className='rightSide'>rightSide</div>
      </div>
    </div>
  );
};

export default Home;
