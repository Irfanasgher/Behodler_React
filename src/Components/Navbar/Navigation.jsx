import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <div id="navbar">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="none"
        variant="dark"
        className="navWrapper px-0"
      >
        <Navbar.Brand className="logo d-flex align-items-center">
          <img
            src="images/logo-brand.png"
            style={{ maxWidth: 200 }}
            alt="logo"
          />
          {/* <span className='ml-3'>behodler.io</span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto customNav">
            <Nav.Link className="navlink">Swap</Nav.Link>
            <Nav.Link className="navlink" eventKey={2}>
              Liquidity Minining
            </Nav.Link>
            <Nav.Link className="navlink" eventKey={3}>
              Vote
            </Nav.Link>
            <Nav.Link className="navlink" eventKey={3}>
              EYE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
