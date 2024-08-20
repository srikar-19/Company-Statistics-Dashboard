import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand='sm' bg="dark" data-bs-theme="dark" className='text-white'>
        <Container>
          <Navbar.Brand href="#home" className='text-white'>Company Statistics</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse className='justify-content-end text-white' id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
                <NavLink className="nav-link text-white me-4" as={NavLink} to="/">Dashboard</NavLink>
                <NavLink className="nav-link text-white me-4" as={NavLink} to="/help">Help</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
