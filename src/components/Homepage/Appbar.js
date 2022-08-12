import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./styles/Banner.css";
function Appbar() {
  return (
    <>
      {" "}
      {["sm"].map((expand, id) => (
        <Container className="appbar" key={id}>
          <Navbar
            bg="light"
            expand={expand}
            className="mb-3 sticky-top"
            sticky="top"
          >
            <Container fluid>
              <Navbar.Brand href="/" className="fw-bold fs-4">
                ABC
              </Navbar.Brand>
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
                    <Nav.Link
                      href="/"
                      className="nav__item text-dark custom_hover"
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      href="/about"
                      className="nav__item text-dark custom_hover"
                    >
                      About
                    </Nav.Link>
                    <Nav.Link
                      href="/mission"
                      className="nav__item text-dark custom_hover"
                    >
                      Misison
                    </Nav.Link>
                    <Nav.Link
                      href="/project"
                      className="nav__item text-dark custom_hover"
                    >
                      Project
                    </Nav.Link>
                    <Nav.Link
                      href="/contact"
                      className="nav__item text-dark custom_hover"
                    >
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
