import React from 'react';
import './styles/Sponsor.css';
import Auf from '../assets/logo_auf.png';
import Alcatel from '../assets/logo_alcatel.jpg';
import Atu from '../assets/logo_atu.jpg';
import Cames from '../assets/logo_cames.jpg';
import Cedeao from '../assets/logo_cedeao.jpg';
import Cisco from '../assets/logo_cisco.png';
import Gsma from '../assets/logo_gsma.png';
import Uemoa from '../assets/Logo_UEMOA.png';
import Itu from '../assets/logo_ITU.png';

const Sponsor = () => {
  return (
    <div className="slider">
      <div className="slide_track">
        <div className="slide">
          <img src={Auf} alt="" className="img" />
        </div>
        <div className="slide">
          <img src={Cames} alt="" className="img" />
        </div>
        <div className="slide">
          <img src={Uemoa} alt="" className="img" />
        </div>
        <div className="slide">
          <img src={Itu} alt="" className="img" />
        </div>
        <div className="slide">
          <img src={Alcatel} alt="" className="img" />
        </div>
        <div className="slide">
          <img src={Cisco} alt="" className="img" />
        </div>
        <div className="slide">
          <img src={Atu} alt="" className="img" />
        </div>
        <div className="slide">
          <img src={Cedeao} alt="" className="img" />
        </div>
        <div className="slide">
          <img src={Gsma} alt="" className="img" />
        </div>
      </div>
      <div className="cache"></div>
    </div>
  );
};

export default Sponsor;
