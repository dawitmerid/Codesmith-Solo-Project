import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPostActionCreator } from '../../actions/actions';
import { Link } from 'react-router-dom';
const CreatePost = () => {
  const [postData, setPostData] = useState({
    location_name: '',
    pic_url: '',
    location: '',
    description: '',
    catagory: 'event',
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    // const [inputValue, setInputValue] = useState('')
    // setInputValue(event.target.value)
  };

  const handleCategoryChange = (e) => {
    const idx = e.target.value;
    // setSpecies(speciesData[idx].name);
    // setSpeciesId(speciesData[idx]._id);
  };

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPostActionCreator(postData));
  };

  // clear fields
  const clear = () => {};

  //   const categoryOptions = speciesData.map((speciesObj, idx) => {
  //     return (
  //       <option key={idx} value={idx}>{speciesObj.name}</option>
  //     );
  //   });

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h3 className='logo-form'>LocalGems</h3>
      {/* error message */}
      <p className='error-message'>username already exists</p>
      {/* START OF single row */}
      <div className='form-row'>
        <label htmlFor='category'>Category: </label>
        {/* <select
          name='species'
          id='species-select'
          onChange={handleSpeciesChange}
        >
          {speciesOptions}
        </select> */}
        <select
          name='category'
          id='category-select'
          placeholder='Event'
          value={postData.catagory}
          onChange={(e) =>
            setPostData({ ...postData, catagory: e.target.value })
          }
        ></select>
      </div>
      {/* END OF single row */}
      {/* START OF single row */}
      <div className='form-row'>
        <label htmlFor='name'> Name: </label>
        <input
          name='name'
          type='text'
          placeholder='Name of the location'
          className='form-input'
          value={postData.name}
          onChange={(e) =>
            setPostData({ ...postData, location_name: e.target.value })
          }
        />
      </div>
      {/* END OF single row */}
      {/* START OF single row */}
      <div className='form-row'>
        <label htmlFor='name'> Location: </label>
        <input
          name='name'
          type='text'
          placeholder='Name of the location'
          className='form-input'
          value={postData.location}
          onChange={(e) =>
            setPostData({ ...postData, location: e.target.value })
          }
        />
      </div>
      {/* END OF single row */}
      {/* START OF single row */}
      <div className='form-row'>
        <label htmlFor='pic'> Picture url: </label>
        <input
          name='pic'
          type='text'
          placeholder='picture url'
          className='form-input'
          value={postData.pic_url}
          onChange={(e) =>
            setPostData({ ...postData, pic_url: e.target.value })
          }
        />
      </div>
      {/* END OF single row */}
      {/* START OF single row */}
      <div className='form-row'>
        <label htmlFor='description'> Description: </label>
        <textarea
          name='description'
          id=''
          cols='30'
          rows='10'
          placeholder='write a description about the place/event'
          className='form-textarea'
          value={postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        ></textarea>
      </div>
      {/* END OF single row */}
      <div className='form-row'>
        {/* <label htmlFor='empty space to push the button to the right'> </label> */}
        <div className='form-row'>
          <Link to='/dash' className='btn'>
            Back
          </Link>
          <button className='btn' type='submit'>
            Post
          </button>
          <button className='btn' onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
