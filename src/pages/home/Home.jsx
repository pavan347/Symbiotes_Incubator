import React from 'react';
import './Home.css';
import Hero from '../../components/Hero';
import BackedBy from '../../components/BackedBy';

const Home = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Hero />
      <BackedBy/>
    </div>
  );
}

export default Home;
