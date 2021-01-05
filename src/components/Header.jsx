import React from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="md" variant="dark">
        <Container>
          <Navbar.Brand href="/">Blohsh Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart mr-2"></i>
                <span>Cart</span>
              </Nav.Link>
              <Nav.Link href="/sign-in">
                <i className="fas fa-user mr-2"></i>
                <span>Sign In</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
