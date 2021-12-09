import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import Heure from './Heure';

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Nav.Link href="/">Accueil</Nav.Link>
          <NavDropdown title="Connecteurs" id="basic-nav-dropdown">
            <NavDropdown.Item href="/connecteur/conjonction">
              Conjonction
            </NavDropdown.Item>
            <NavDropdown.Item href="/connecteur/implication">
              Implication
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/connecteur/negation">
              Négation
            </NavDropdown.Item>
            <NavDropdown.Item href="/connecteur/disjonction">
              Disjonction
            </NavDropdown.Item>
            <NavDropdown.Item href="/connecteur/equivalence">
              Equivalence
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/connecteur">Connecteurs</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Quantificateurs" id="basic-nav-dropdown">
            <NavDropdown.Item href="/quantificateur/existence">
              Quantificateur existenciel
            </NavDropdown.Item>
            <NavDropdown.Item href="/quantificateur/universel">
              Quantificateur universel
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Mots-clés" id="basic-nav-dropdown">
            <NavDropdown.Item href="/motcle/ilexiste">
              Il existe
            </NavDropdown.Item>
            <NavDropdown.Item href="/motcle/montrons">
              Montrons
            </NavDropdown.Item>
            <NavDropdown.Item href="/motcle/posons">Posons</NavDropdown.Item>
            <NavDropdown.Item href="/motcle/soit">Soit</NavDropdown.Item>
            <NavDropdown.Item href="/motcle/supposons">
              Supposons
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Listes annexes" id="basic-nav-dropdown">
            <NavDropdown.Item href="/liste/lpu">
              Liste des propositions utilisables
            </NavDropdown.Item>
            <NavDropdown.Item href="/liste/lc">
              Liste des constantes
            </NavDropdown.Item>
            <NavDropdown.Item href="/liste/phrase">Phrase</NavDropdown.Item>
          </NavDropdown>
          <Heure />
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Navigation;

/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Wordlet</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Decoy 6" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Règles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Joueur maître</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Autre joueur</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>; 
<Outlet />*/

// style={{
//           borderBottom: 'solid 1px',
//           paddingBottom: '1rem',
//         }}
