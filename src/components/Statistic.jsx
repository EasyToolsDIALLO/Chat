import React, { useState } from 'react';
import './styles/Statistic.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Statistic = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="stats_hori">
      <div className="stats_vert">
        <h1>Statistiques</h1>
        <div className="stats_tiret"></div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="stats_body">
            <div className="percentage">
              {counterOn && (
                <h2>
                  <CountUp start={0} end={60} duration={2} />%
                </h2>
              )}

              <h4>
                ont un emploi six (6) mois après leur sortie (dont 30 % avant la
                fin de la formation).
              </h4>
            </div>

            <div className="percentage">
              {counterOn && (
                <h2>
                  <CountUp start={0} end={95} duration={2} />%
                </h2>
              )}
              <h4>ont un emploi au bout d’un an.</h4>
            </div>

            <div className="percentage">
              {counterOn && (
                <h2>
                  <CountUp start={0} end={5} duration={2} />%
                </h2>
              )}
              <h4>s’engagent dans un cycle doctoral.</h4>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Statistic;
