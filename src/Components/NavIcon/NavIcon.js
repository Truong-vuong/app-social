import React from "react";
import { Link } from "react-router-dom";

import "./NavIcon.css";

const NavIcon = () => {
  return (
    <div className='NavIcon'>
      <div className='icon__item'>
        <Link to='/'>
          <i className='bx bx-home-alt-2'></i>
        </Link>
      </div>
      <div className='icon__item'>
        <i className='bx bxs-brightness'></i>
      </div>
      <div className='icon__item'>
        <i className='bx bxs-bell'></i>
      </div>
      <div className='icon__item'>
        <i className='bx bxs-message-dots'></i>
      </div>
    </div>
  );
};

export default NavIcon;
