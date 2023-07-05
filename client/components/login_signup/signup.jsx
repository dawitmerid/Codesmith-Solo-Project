import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosCreate } from '../../axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const SIGNUP_URL = '/auth/register';

const Signup = () => {
  const handleChange = (event) => {
    // const [inputValue, setInputValue] = useState('')
    // setInputValue(event.target.value)
  };

  // to focus on the user input when the component loads
  const userNameRef = useRef();
  const errRef = useRef();

  //state for the first name field
  const [firstName, setFirstName] = useState('');
  // const [validName, setValidName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  //state for the last name field
  const [lastName, setLastName] = useState('');
  // const [validName, setValidName] = useState(false);
  const [lastNameFocus, setlastNameFocus] = useState(false);

  //state for the user field
  const [userName, setUserName] = useState('');
  const [validName, setValidName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);

  // state for password field
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // state for confirm password field
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // state for confirm password field
  const [picUrl, setPicUrl] = useState('');
  const [picUrlFocus, setPicUrlFocus] = useState(false);

  // state for error message if error exist
  // state for success submit
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  // useEffect(() => {
  //   const result = USER_REGEX.test(userName);
  //   console.log(result);
  //   console.log(userName);
  //   setValidName(result);
  // }, [userName]);

  useEffect(() => {
    // const result = PWD_REGEX.test(pwd);
    // console.log(result);
    // console.log(pwd);
    // setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [userName, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosCreate.post(
        SIGNUP_URL,
        JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          username: userName,
          password: pwd,
          pic_url: picUrl,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      // clear input fields
      setFirstName('');
      setLastName('');
      setUserName('');
      setPwd('');
      setMatchPwd('');
      setPicUrl('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('username taken');
      } else {
        setErrMsg('Registration failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h3 className='logo-form'>LocalGems</h3>
      <p
        className={errMsg ? 'error-message' : 'error-message-none'}
        ref={errRef}
        aria-live='assertive'
      >
        {errMsg}
      </p>
      <div className='first-last-name'>
        <input
          type='text'
          placeholder='first name'
          className='form-input'
          id='username'
          ref={userNameRef}
          autoComplete='off'
          onChange={(e) => setFirstName(e.target.value)}
          required
          aria-describedby='uidnote'
          onFocus={() => setFirstNameFocus(true)}
          onBlur={() => setFirstNameFocus(false)}
        />
        <input
          type='text'
          placeholder='last name'
          className='form-input'
          id='lastname'
          autoComplete='off'
          onChange={(e) => setLastName(e.target.value)}
          required
          onFocus={() => setlastNameFocus(true)}
          onBlur={() => setlastNameFocus(false)}
        />
      </div>
      <input
        type='text'
        placeholder='username'
        className='form-input'
        autoComplete='off'
        onChange={(e) => setUserName(e.target.value)}
        required
        onFocus={() => setUserNameFocus(true)}
        onBlur={() => setUserNameFocus(false)}
      />
      <input
        type='text'
        placeholder='password'
        className='form-input'
        onChange={(e) => setPwd(e.target.value)}
        required
        // aria-invalid={validPwd ? 'false' : 'true'}
        onFocus={() => setPwdFocus(true)}
        onBlur={() => setPwdFocus(false)}
      />
      <input
        type='text'
        placeholder='confirm password'
        className='form-input'
        onChange={(e) => setMatchPwd(e.target.value)}
        required
        aria-invalid={validMatch ? 'false' : 'true'}
        onFocus={() => setMatchFocus(true)}
        onBlur={() => setMatchFocus(false)}
      />
      <input
        type='text'
        placeholder='profile picture url'
        className='form-input'
        onChange={(e) => setPicUrl(e.target.value)}
        required
        onFocus={() => setPicUrlFocus(true)}
        onBlur={() => setPicUrlFocus(false)}
      />
      <button className='btn' disabled={!validMatch ? true : false}>
        Sign up
      </button>
      <p>
        Already registered?
        <br />
        <span className=''>
          {' '}
          <Link to='/'>Sign In</Link>
        </span>{' '}
      </p>
    </form>
  );
};

export default Signup;
