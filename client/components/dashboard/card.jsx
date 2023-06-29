import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Card = (props) => {
  const { picUrl, category, description, likeCount, location, locationName } =
    props;

  return (
    <div className='card'>
      <div className='post-icon-container'>
        <button className='post-icon'>
          <span className='material-symbols-outlined post-icons'>delete</span>
        </button>
        <button className='post-icon'>
          <span className='material-symbols-outlined'>edit_square</span>
        </button>
        <button className='post-icon'>
          <span className='material-symbols-outlined'>favorite</span>
        </button>
      </div>
      <div className='posted-pic'>
        <img src={picUrl} alt='posted-img' className='posted-img' />
      </div>
      <div className='card-details'>
        <h5 className='card-name'>{locationName}</h5>
        <p className='locaton'>{location}</p>
        <p className='description'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
