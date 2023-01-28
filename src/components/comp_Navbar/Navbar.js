import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AuthDetails from '../firebase/AuthDetail'; 


export default class NavbarComp extends Component {
  render() {
    return (//Usunac fluid aby zmniejszyc nava
        <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand href="./">P0lski Bunker</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/">Strona Główna</Nav.Link>
              <Nav.Link href="/Aukcje">Aukcje</Nav.Link>
              <Nav.Link href="Kontakt">Kontakt</Nav.Link>
              <Nav.Link href="Archiwum">Archiwum</Nav.Link>

              <NavDropdown title="Szybkie Wyszukiwanie" id="navbarScrollingDropdown">
                <NavDropdown.Item href="Aukcje">Hatchback</NavDropdown.Item>
                <NavDropdown.Item href="Aukcje">Kombi</NavDropdown.Item>
                <NavDropdown.Item href="Aukcje">Sedan</NavDropdown.Item>
                <NavDropdown.Item href="Aukcje">Van</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Aukcje">Crossover</NavDropdown.Item>
                <NavDropdown.Item href="Aukcje">SUV</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Aukcje">Dorożki</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <AuthDetails/>
            <a href="/Signin"><button type="button" class="btn btn-secondary mx-2">Zaloguj się</button></a>
            <a href="/Signup"><button type="button" class="btn btn-primary" href="Signup">Zarejestruj się</button></a>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
