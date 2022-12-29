import React from 'react';
import Card from './Card';
import './styles/Formations.css';
import Prepa from '../assets/CPGE.png';
import Licence from '../assets/licence.webp';
import Master from '../assets/master.jpg';
import Ingenieur from '../assets/engineering_logo.jpg';

const Formations = () => {
  return (
    <div className="formations">
      <div className="formations_vect">
        <h1>Formations</h1>
        <div className="formations_tiret"></div>
        <div className="formations_body">
          <Card
            name="Classes Prépa"
            logo={Prepa}
            description="Cette formation a une durée de deux ans"
          />
          <Card
            name="Licence"
            logo={Licence}
            description="Cette formation a une durée de 03ans, suivi d'une soutenance à la dernière année académique.. De plus, elle est disponible en cours du Soir et en cours en Ligne"
          />
          <Card
            name="Master"
            logo={Master}
            description="Cette formation a une durée de 02ans, suivi d'une soutenance à la dernière année académique. De plus, elle est disponible en cours du Soir et en cours en Ligne"
          />
          <Card
            name="Ingeniorat"
            logo={Ingenieur}
            description="Cette formation a une durée de 03ans, suivi d'une soutenance à la dernière année académique."
          />
          <Card
            name="Doctorat"
            logo={Master}
            description="Cette formation a une durée de 02ans, suivi d'une soutenance à la dernière année académique."
          />
        </div>
      </div>
    </div>
  );
};

export default Formations;
