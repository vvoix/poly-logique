import React from 'react';
import Navigation from '../../components/Navigation';
import Table from 'react-bootstrap/Table';
import './LPU.css';

const LPU = () => {
  return (
    <div>
      <Navigation />

      <div className="bd-callout bd-callout-success">
        <h4>Liste des propositions utilisables (LPU)</h4>
        La <em>LPU</em> est une liste annexée à une démonstration qui permet de
        gérer la <em>dynamique</em> de celle-ci. indiquant sa nature et une ou
        deux lettres variables qui représentent des propositions.
        <ul>
          <li>
            La <em>dynamique</em> d'une démonstration est la façon dont les
            données concernant cette démonstration évolue à chaque phrase.
          </li>
          <li>
            {' '}
            La valeur de vérité de la proposition ainsi formée est déterminée
            par celles des propositions données par une <em>table de vérité</em>
            . Les tables de vérité servent essentiellement à démontrer des
            relations logiques entre connecteurs.
          </li>
        </ul>
      </div>
      <Table responsive="sm" variant="success">
        <thead>
          <tr>
            <th>Connecteur</th>
            <th>symbole </th>
            <th>Notation usuelle</th>
            <th>Définition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Conjonction de $P$ et $Q$</td>
            <td>$P\land Q$</td>
            <td>On a : $P$ et $Q$.</td>
            <td></td>
          </tr>
          <tr>
            <td>Implication de $P$ vers $Q$</td>
            <td>$P\Rightarrow Q$</td>
            <td>Si $P$ alors $Q$.</td>
            <td></td>
          </tr>
          <tr>
            <td>Négation de $P$</td>
            <td>$\neg P$</td>
            <td>On n'a pas $P$.</td>
            <td>$P\Rightarrow F$</td>
          </tr>
          <tr>
            <td>Disjonction de $P$ et $Q$</td>
            <td>$P \lor Q$</td>
            <td>On a : $P$ ou $Q$.</td>
            <td>$\neg P\Rightarrow Q$</td>
          </tr>
          <tr>
            <td>Equivalence entre $P$ et $Q$</td>
            <td>$P\Leftrightarrow Q$</td>
            <td>On a : $P$ si et seulement si $Q$.</td>
            <td>$(P\Rightarrow Q)\land(Q\Rightarrow P)$</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default LPU;
