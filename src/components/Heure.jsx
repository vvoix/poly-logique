import React from 'react';
import { useTime } from 'react-timer-hook';
import './Heure.css';
const Heure = () => {
  function affichZero(nombre) {
    return nombre < 10 ? '0' + nombre : nombre;
  }
  const { seconds, minutes, hours } = useTime({ format: '24-hour' });
  return (
    <div className="Heure">
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '20px' }}>
          <span>{hours}</span>:<span>{affichZero(minutes)}</span>:
          <span>{affichZero(seconds)}</span>
        </div>
      </div>
    </div>
  );
};

export default Heure;
