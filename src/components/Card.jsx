import React from 'react';
import './styles/Card.css';

const Card = ({ name, description, logo }) => {
  return (
    <div className="card">
      <div className="card_head">
        <img src={logo} alt="" className="card_image" />
        <h3>{name}</h3>
      </div>
      <div className="card_description">{description}</div>
      <div>
        <button className="card_suite">Lire la suite ...</button>
      </div>

      <div className="card_body"></div>
    </div>
  );
};

export default Card;
