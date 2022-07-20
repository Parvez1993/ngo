import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./styles/Banner.css";
function Appbar() {
  return (
    <>
      {" "}
      {["sm"].map((expand) => (
        <Container className="appbar">
          <Navbar
            key={expand}
            bg="light"
            expand={expand}
            className="mb-3 sticky-top"
            sticky="top"
          >
            <Container fluid>
              <Navbar.Brand href="/">Ngo Website</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    className="text-white"
                  >
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 offcanvas_menu">
                    <Nav.Link href="#action1" className="nav__item">
                      Home
                    </Nav.Link>
                    <Nav.Link href="#action2" className="nav__item">
                      About
                    </Nav.Link>
                    <Nav.Link href="#action3" className="nav__item">
                      Misison
                    </Nav.Link>
                    <Nav.Link href="#action4" className="nav__item">
                      Project
                    </Nav.Link>
                    <Nav.Link href="#action5" className="nav__item">
                      Contact
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </Container>
      ))}
    </>
  );
}

export default Appbar;
