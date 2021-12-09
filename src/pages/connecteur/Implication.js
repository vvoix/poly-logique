import React from 'react';
import Navigation from '../../components/Navigation';

const Implication = () => {
  return (
    <div>
      <Navigation />
      <div className="bd-callout bd-callout-warning">
        <h4>Schéma de démonstration</h4>
        Supposons $P$, Montrons $Q$.
      </div>
      <div className="bd-callout bd-callout-success">
        <h4>Schéma d'utilisation</h4>
        Puisque $P$, on a $Q$.
      </div>
    </div>
  );
};

export default Implication;
