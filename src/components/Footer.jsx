import React from "react"
import { Container } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container variant="dark">
        <div className="text-center py-3">
          Copyright &copy; Blohsh Store {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
