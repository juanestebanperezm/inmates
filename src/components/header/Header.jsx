import React from "react";

//Componentes
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//css
import "../header/header.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="barra" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="mx-4" href="#link">
              CashApp
            </Nav.Link>
            <Nav.Link className="mx-4" href="#home">
              About
            </Nav.Link>
            <Nav.Link className="mx-4" href="#link">
              Help
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="brand" href="#home">
          VIP INMATES
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
