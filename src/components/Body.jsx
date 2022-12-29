import React from 'react';
import AboutSchool from './AboutSchool';
import Formations from './Formations';
import './styles/Body.css';

const Body = () => {
  return (
    <div className="app_body">
      <AboutSchool />
      <Formations />
    </div>
  );
};

export default Body;
