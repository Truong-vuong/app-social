import React, { useState, useRef } from "react";

import "./PostShare.css";
import ProfileImg from "../../img/profileImg.jpg";

const PostShare = () => {
  const [image, setImage] = useState();
  const imageRef = useRef();

  const onChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img)
      });
    }
  };

  return (
    <div className='PostShare'>
      <div className='postShare__head'>
        <div className='postShare__img'>
          <img src={ProfileImg} alt='' />
        </div>
        <div className='postShare__input'>
          <input type='text' placeholder='What do you thinks ...' />
        </div>
      </div>
      <div className='postShare__body'>
        <div
          className='postShare__item photo--share'
          onClick={() => imageRef.current.click()}
        >
          <i className='bx bxs-image'></i>
          <span>Photo</span>
        </div>
        <div className='postShare__item video--share'>
          <i className='bx bx-play-circle'></i>
          <span>Video</span>
        </div>
        <div className='postShare__item location--share'>
          <i className='bx bxs-edit-location'></i>
          <span>Location</span>
        </div>
        <div className='postShare__item shedule--share'>
          <i className='bx bx-calendar'></i>
          <span>Shedule</span>
        </div>
        <div className='postShare__item'>
          <button className='btn'>Share</button>
        </div>

        <div className='postShare__item' style={{ display: "none" }}>
          <input
            type='file'
            name='myImage'
            ref={imageRef}
            onChange={onChangeImage}
          />
        </div>
      </div>
      {image && (
        <div className='previewImg'>
          <i className='bx bx-x' onClick={() => setImage(null)}></i>
          <img src={image.image} alt='images' />
        </div>
      )}
    </div>
  );
};

export default PostShare;
