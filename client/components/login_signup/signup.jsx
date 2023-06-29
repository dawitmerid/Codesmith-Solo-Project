import React from 'react';

const Signup = () => {
  const handleChange = (event) => {
    // const [inputValue, setInputValue] = useState('')
    // setInputValue(event.target.value)
  };

  return (
    <form action='' className='form'>
      <h3 className='logo-form'>LocalGems</h3>
      <p className='error-message'>username already exists</p>
      <div className='first-last-name'>
        <input type='text' placeholder='first name' className='form-input' />
        <input type='text' placeholder='last name' className='form-input' />
      </div>
      <input type='text' placeholder='username' className='form-input' />
      <input type='text' placeholder='password' className='form-input' />
      <input
        type='text'
        placeholder='confirm password'
        className='form-input'
      />
      <input
        type='text'
        placeholder='profile picture url'
        className='form-input'
      />
      <button className='btn'>Sign up</button>
    </form>
  );
};

export default Signup;
