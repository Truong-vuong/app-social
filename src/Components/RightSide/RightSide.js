import React from "react";

import "./RightSide.css";
import NavIcon from "../NavIcon/NavIcon";
import Trend from "../Trend/Trend";

const RightSide = () => {
  return (
    <div className='RightSide'>
      <NavIcon />
      <Trend />
      <button className='btn'>Share</button>
    </div>
  );
};

export default RightSide;
