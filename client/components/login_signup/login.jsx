import React from 'react';

const Login = () => {
  const handleChange = (event) => {
    // const [inputValue, setInputValue] = useState('')
    // setInputValue(event.target.value)
  };

  return (
    <form action='' className='form'>
      <h3 className='logo-form'>LocalGems</h3>
      <p className='error-message'>please fill in the username</p>
      <input type='text' placeholder='username' className='form-input' />
      <input type='text' placeholder='password' className='form-input' />
      <button className='btn'>Sign in</button>
      <div className='line'>
        <div></div>
        <p>or</p>
        <div></div>
      </div>
      <button className='btn'>Sign up</button>
    </form>
  );
};

export default Login;
