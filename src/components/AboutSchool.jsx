import React from 'react';
import Logo from '../assets/esmt_logo_blue.jpg';
import './styles/AboutSchool.css';

const AboutSchool = () => {
  return (
    <div className="about">
      <div>
        <div className="about_title"> A PROPOS DE NOUS </div>
        <div className="about_description">
          Dans le sillage de la consolidation de notre positionnement
          d’institution d’enseignement supérieur de référence à caractère
          professionnel et universitaire dans les Télécommunications/TIC, l’ESMT
          se fixe un nouveau cap pour faire face aux grands bouleversements
          actuels de l’écosystème, annonciateurs d’une nouvelle ère
          technologique, celle du Numérique !
        </div>
        <button className="about_suite">Lire la suite ...</button>
      </div>
      <img src={Logo} alt="" />
    </div>
  );
};

export default AboutSchool;
