import React from 'react';
import Navigation from '../../components/Navigation';
import { Card, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Conjonction = () => {
  return (
    <div>
      <Navigation />

      <div class="jumbotron text-center"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <Card>
              <Card.Header as="h5">Conjonction (connecteur)</Card.Header>
              <Card.Body>
                <p>
                  Étant données $P$ et $Q$ des propositions, <br />
                  la <em>conjonction</em> de $P$ et $Q$ est la proposition qui
                  concentre l'information que les propositions $P$ et $Q$ sont
                  toutes les deux vraies.{' '}
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5">Liens</Card.Header>
              <Card.Body>
                <Link to="/mot-cle/montrons" class="btn btn-outline-primary">
                  Montrons (mot-clé)
                </Link>{' '}
                <Link to="/mot-cle/ona" class="btn btn-outline-success">
                  On a (mot-clé)
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm-4">
            <Card>
              <Card.Header as="h5">Schémas de $P\land Q$ </Card.Header>
              <Card.Body>
                <Card.Title>Schéma de démonstration</Card.Title>
                <Card.Text class="bd-callout bd-callout-primary">
                  <ul>
                    <li>Montrons $P$.</li>
                    <li>Montrons $Q$. </li>
                  </ul>
                </Card.Text>
                <Card.Title>Schéma d'utilisation</Card.Title>
                <Card.Text class="bd-callout bd-callout-success">
                  On a $P$. On a $Q$.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="col-sm-4">
            <Card>
              <Card.Header as="h5">Table de vérité </Card.Header>
              <Card.Body>
                <Table responsive="sm" variant="success">
                  <thead>
                    <tr>
                      <th> $P$</th>
                      <th> $Q$ </th>
                      <th> $P\land Q$</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> $V$ </td>
                      <td> $V$ </td>
                      <td> $V$ </td>
                    </tr>
                    <tr>
                      <td> $V$ </td>
                      <td> $F$ </td>
                      <td> $F$ </td>
                    </tr>
                    <tr>
                      <td> $F$ </td>
                      <td> $V$ </td>
                      <td> $F$ </td>
                    </tr>
                    <tr>
                      <td> $F$ </td>
                      <td> $F$ </td>
                      <td> $F$ </td>
                    </tr>
                  </tbody>
                </Table>{' '}
                Autrement dit, $P\land Q$ est vrai uniquement dans le cas où $P$
                et $Q$ sont toutes les deux vraies.
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conjonction;
