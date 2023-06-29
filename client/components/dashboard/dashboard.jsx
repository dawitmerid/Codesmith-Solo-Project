// will contain the header and main jsx
import React, { useEffect } from 'react';
import Header from './header';
import Main from './main';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

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
          <button className='btn option-btn'>Make New Post</button>
        </div>
        <div className='left-empty-space empty-blue-space'></div>
      </div>
    );
  };

  return (
    <div className='dashboard'>
      <Header />
      <Main />
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default Dashboard;
