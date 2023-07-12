// will contain the header and main jsx
import React, { useEffect } from 'react';
import Header from './header';
import Main from './main';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreatePost from './createPost';

const Dashboard = () => {
  const posts = useSelector((state) => state.posts);
  const handleClick = () => {};
  // right panel component
  const RightPanel = () => {
    return <div className='right-panel empty-blue-space'></div>;
  };

  // left panel component
  const LeftPanel = () => {
    return (
      <div className='left-panel'>
        <div className='left-options'>
          <button className='btn option-btn-active'>New Posts</button>
          <button className='btn option-btn'>Liked</button>
          <button className='btn option-btn'>My Posts</button>
          <Link to='/newpost' className='btn option-btn'>
            Make New Post
          </Link>
        </div>

        <div className='left-empty-space empty-blue-space'></div>
      </div>
    );
  };

  return (
    <div className='dashboard'>
      <Header />
      <Main posts={posts} />
      <LeftPanel />
      <RightPanel />

      <Routes>
        <Route path='/newpost' element={<CreatePost />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
