import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h3 className='logo-form'>LocalGems</h3>
      <div className='nav-btn-container'>
        <Link to='/dashboard/category/events' className='btn nav-btn'>
          Events
        </Link>
        <Link to='/dashboard/category/parks' className='btn nav-btn-active'>
          Parks
        </Link>
        <Link to='/dashboard/category/food' className='btn nav-btn'>
          Food/Drink
        </Link>
        <Link to='/dashboard/category/shopping' className='btn nav-btn'>
          Shooping
        </Link>
        {/* <button className='btn nav-btn'>Events</button>
        <button className='btn nav-btn-active'>Parks</button>
        <button className='btn nav-btn'>Food/Drink</button>
        <button className='btn nav-btn'>Shopping</button> */}
      </div>
      <div className='account-container'>
        <span className='material-symbols-outlined'>settings</span>
        <img
          src='https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg'
          alt='profile-picture'
          className='.img profile-pic'
        />
        <div className='account-name-container'>
          <p className='account-name'>Dawit</p>
          <p className='account-name'>Merid</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
