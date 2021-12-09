import React from 'react';
import Navigation from '../../components/Navigation';
import Table from 'react-bootstrap/Table';
import './LPU.css';

const Phrase = () => {
  return (
    <div>
      <Navigation />
      <div className="bd-callout bd-callout-success">
        <h4>Phrase</h4>
        Dans une démonstration, une <em>phrase</em> est une unité sémentique
        (unité de sens) atomique (la plus petite possible). Elle constitue une
        instruction (c'est-à-dire qu'elle explique ce qu'il faut faire à ce
        moment là).
        <ul>
          <li>
            Une phrase commence par une majuscule et se termine par un point.
          </li>
          <li>
            Une phrase contient un mot-clé qui impose sa syntaxe et définit son
            action.
          </li>
          <li>
            Une phrase interagit avec la LPU et la LC en fonction de son
            mot-clé.
          </li>
        </ul>
      </div>
      <div className="bd-callout bd-callout-success">
        <h4>Propriété (langage courant)</h4>
        La somme de deux nombres pairs est paire.
      </div>

      <div className="bd-callout bd-callout-success">
        <h4>Propriété (langage formalisé)</h4>
        $(\forall m\in\mathbb Z)\,(\forall n\in\mathbb Z)$ $(m$ pair $\land$ $n$
        pair$)\,\Rightarrow\,m+n$ pair
      </div>
      <div className="bd-callout bd-callout-success">
        <h4>Démonstration</h4>
        Soit $m\in\mathbb Z$. Soit $m\in\mathbb Z$. Supposons $m$ pair $\land$
        $n$ pair. On a $m$ pair. Il existe $k\in\mathbb Z$ tel que $m=2k$. On a
        $n$ pair. Il existe $l\in\mathbb Z$ tel que $n=2l$. Montrons que $m+n$
        est pair. Posons $s=k+l\in\mathbb Z$. On a : $m+n=2k+2l=2(k+l)=2s$.
      </div>
    </div>
  );
};

export default Phrase;
