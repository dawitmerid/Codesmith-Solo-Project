import React from 'react';

const Card = () => {
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
        <img
          src='https://images.pexels.com/photos/236940/pexels-photo-236940.jpeg'
          alt='posted-img'
          className='posted-img'
        />
      </div>
      <div className='card-details'>
        <h5 className='card-name'>Rock Creek Park</h5>
        <p className='locaton'>2401 Tilden Street NW, Washington DC</p>
        <p className='description'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          ipsum nesciunt consequuntur dolore voluptatibus harum architecto
          blanditiis dolores maxime eligendi, consectetur laboriosam, voluptates
          odio possimus, temporibus quis est illum accusamus.
        </p>
      </div>
    </div>
  );
};

export default Card;
