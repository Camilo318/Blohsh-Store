import React from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Blohsh Store</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/sign-in">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
