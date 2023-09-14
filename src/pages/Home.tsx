import React from 'react'
import DashBoard from './DashBoard';
import About from './About';

const Home = () => {
  const user = false;

  return user ? <DashBoard /> : <About /> 
}

export default Home