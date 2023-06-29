import React, { Component, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './stylesheets/style.scss';
import Login from './components/login_signup/login';
import Signup from './components/login_signup/signup';
import CreatePost from './components/dashboard/createPost';
import Dashboard from './components/dashboard/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllActionCreator } from './actions/actions';
import { StaticRouter } from 'react-router-dom/server';

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllActionCreator());
  }, [dispatch]);

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/dash/newpost' element={<CreatePost />} />
      </Routes>

      {/* <CreatePost /> */}
    </div>
  );
};

export default App;
