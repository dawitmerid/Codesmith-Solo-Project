import React, { Component, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './stylesheets/style.scss';
import Login from './components/login_signup/login';
import Signup from './components/login_signup/signup';
import CreatePost from './components/dashboard/createPost';
import Dashboard from './components/dashboard/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllActionCreator } from './actions/actions';

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllActionCreator());
  }, [dispatch]);

  return (
    <div className='app'>
      {/* <Switch>
        <Router>
          <Route path='/' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/dashboard' exact component={Dashboard} />
        </Router>
      </Switch> */}
      <Dashboard />
    </div>
  );
};

export default App;
