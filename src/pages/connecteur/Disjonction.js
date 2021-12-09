import React from 'react';
import Navigation from '../../components/Navigation';
import { Card, CardGroup } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
const Disjonction = () => {
  return (
    <div>
      <Navigation />

      <CardGroup>
        <Card>
          <Card.Header as="h5">Disjonction</Card.Header>
          <Card.Body>
            <Card.Title>Schéma de démonstration</Card.Title>
            <Card.Text class="text text-success">
              Supposons $\neg P$. Montrons $Q$.
            </Card.Text>
            <Button class="btn btn-outline-danger">Exemples</Button>
            <Card.Title>Schéma d'utilisation</Card.Title>
            <Card.Text>Puisque $\neg P$, on a : $Q$.</Card.Text>
            <Button class="btn btn-outline-success">Exemples</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Disjonction;
