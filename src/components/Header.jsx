import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="md" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Blohsh Store</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart mr-2"></i>
                  <span>Cart</span>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/sign-in">
                <Nav.Link>
                  <i className="fas fa-user mr-2"></i>
                  <span>Sign In</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
