import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const pages = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Partners", href: "/partners" },
  { name: "Docs", href: "https://www.uocav.ca/docs" },
  { name: "Contact Us", href: "/contact" }
];

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top" expanded={expanded}>
      <div className="navbar-left">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand-custom">
          <img src="/logo.png" alt="uOAV Logo" className="navbar-logo" />
          uOAV
        </Navbar.Brand>
      </div>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="nav-links">
          {pages.map((item) => (
            <Nav.Link as={NavLink} to={item.href} className="nav-link" key={item.name} onClick={handleClose}>
              {item.name}
            </Nav.Link>
          ))}
          <Nav.Link 
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra2S8RqI5r-tPjemcEE7-UlZURUhKM0FTWjI1MFFQMlEyTE84U0daOEIxUCQlQCN0PWcu&origin=QRCode" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="join-btn"
            onClick={handleClose}
          >
            Join the Team
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;






