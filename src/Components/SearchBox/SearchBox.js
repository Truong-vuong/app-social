import React from "react";

import "./SearchBox.css";
import Logo from "../../img/logo.png";

const Search = () => {
  return (
    <div className='SearchBox'>
      <img src={Logo} alt='logo' />
      <div className='search'>
        <input type='text' className='search__input' placeholder='Search...' />
        <div className='search__icon'>
          <i className='bx bx-search'></i>
        </div>
      </div>
    </div>
  );
};

export default Search;
