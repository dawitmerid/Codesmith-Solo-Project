import React from 'react';

const CreatePost = () => {
  const handleChange = (event) => {
    // const [inputValue, setInputValue] = useState('')
    // setInputValue(event.target.value)
  };

  const handleCategoryChange = (e) => {
    const idx = e.target.value;
    // setSpecies(speciesData[idx].name);
    // setSpeciesId(speciesData[idx]._id);
  };

  //   const categoryOptions = speciesData.map((speciesObj, idx) => {
  //     return (
  //       <option key={idx} value={idx}>{speciesObj.name}</option>
  //     );
  //   });

  return (
    <form action='' className='form'>
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
        ></textarea>
      </div>
      {/* END OF single row */}
      <div className='form-row'>
        <label htmlFor='empty space to push the button to the right'> </label>
        <button className='btn'>Post</button>
      </div>
    </form>
  );
};

export default CreatePost;
