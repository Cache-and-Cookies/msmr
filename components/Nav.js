import React from 'react'
import NavStyles from '../styles/Nav.module.css'
import { Navbar, Nav } from 'react-bootstrap'

const MainNav = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className={NavStyles.navbar}>
      <Navbar.Brand href="">
        <img
          src="/logo.png"
          width="23"
          height="23"
          className="d-inline-block align-baseline mx-2"
        />
        <span className={NavStyles.brand}>Multi-System Resilience</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="">About</Nav.Link>
          <Nav.Link href="">Resilience</Nav.Link>
          <Nav.Link href="">Research</Nav.Link>
          <Nav.Link href="">Media</Nav.Link>
          <Nav.Link href="">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNav