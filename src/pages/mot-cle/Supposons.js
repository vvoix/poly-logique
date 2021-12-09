import React from 'react';
import Navigation from '../../components/Navigation';
import { Card, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Supposons = () => {
  return (
    <div>
      <Navigation />{' '}
      <Card>
        <Card.Body>
          <Card.Text class="text text-success">
            <Table responsive="sm" variant="success">
              <thead>
                <tr>
                  <th>Supposons</th>
                  <th> </th>
                  <th> Commentaire</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>syntaxe : </td>
                  <td>Supposons $P$. ($P$ proposition)</td>
                </tr>
                <tr>
                  <td>action : </td>
                  <td>
                    Ajoute $P$ à{' '}
                    <Link to="/liste/LPU" class="btn btn-outline-primary">
                      {' '}
                      LPU
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>usage : </td>
                  <td>
                    <Link
                      to="/connecteur/implication"
                      class="btn btn-outline-primary"
                    >
                      <b> [SU] </b>Implication
                    </Link>{' '}
                    <Link
                      to="/connecteur/conjonction"
                      class="btn btn-outline-primary"
                    >
                      <b> [SU] </b>Conjonction
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Supposons;
