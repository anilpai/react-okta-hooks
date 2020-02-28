import React from 'react';
import useAuth from '../../useAuth';
import {Link } from 'react-router-dom'
const Home = () => {
  const { authenticated } = useAuth()

  if (!authenticated) {
    return <div>Welcome to Home : Please login</div>
  }

  return (
    <div>
      <Link to="/user-info">User Info</Link>
      {' '}
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Home;
