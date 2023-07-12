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
import Layout from './layout';

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllActionCreator());
  }, [dispatch]);

  return (
    // <Login />
    <Dashboard />

    // <Routes>
    //   <Route path='/' element={<Layout />}>
    //     {/* public routes */}
    //     <Route index element={<Login />} />
    //     <Route path='signup' element={<Signup />} />

    //     {/* we want to protect these routes */}
    //     <Route path='dash' element={<Dashboard />} />

    //     {/* catch all */}
    //     <Route path='*' element={<h1>NOTHING TO SEE HERE</h1>} />
    //   </Route>
    // </Routes>
  );
};

export default App;
