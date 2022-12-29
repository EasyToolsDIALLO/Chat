import React, { useState, useEffect } from 'react';
import './styles/NavBar.css';
import Logo from '../assets/esmt_logo.jpg';

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    if (window.scrollY > 100) setVisible(true);
    else setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibility);
    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  }, []);

  return (
    <div className="nav_parent">
      <div className={`nav_header ${visible && 'nav'}`}>
        <div className="ecole head">
          <h3>NOTRE ECOLE</h3>
        </div>
        <div className="initiale head">
          <h3>FORMATION INITIALE</h3>
        </div>
        <div className="continue head">
          <h3>FORMATION CONTINUE</h3>
        </div>
        <div className="conseil head">
          <h3>CONSEIL & EXPERTISE</h3>
        </div>
        <div className="rech head">
          <h3>RECH & INNOV</h3>
        </div>
        <div className="cdoc head">
          <h3>CDOC</h3>
        </div>
        <div className="opportunity head">
          <h3>OPPORTUNITES</h3>
        </div>
        <div className="campus head">
          <h3>CAMPUS</h3>
        </div>
      </div>

      <div className="navbar">
        <img src={Logo} alt="logo" className="navbar_logo" />
        <div className="navbar_button">
          <button className="espace">Votre espace</button>
          <button className="inscription">Inscription</button>
          <div className="navbar_input">
            <input type="text" placeholder="Rechercher" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
