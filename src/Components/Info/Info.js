import React from "react";

import "./Info.css";

const Info = () => {
  return (
    <div className='Info'>
      <div className='info__head'>
        <h2>Your Infomation</h2>
        <i className='bx bxs-pencil'></i>
      </div>
      <div className='info__detail'>
        <span>
          <strong>Status </strong>Online
        </span>
        <span>
          <strong>Live: </strong>Viet Nam
        </span>
        <span>
          <strong>Relations: </strong>Single
        </span>
      </div>
      <button className='btn'>Log out</button>
    </div>
  );
};

export default Info;
