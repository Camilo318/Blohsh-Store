import React from "react"
import { Spinner } from "react-bootstrap"

const Loader = () => {
  const loaderStyles = {
    width: "100px",
    height: "100px",
    margin: "0 auto",
    display: "block",
  }
  return (
    <Spinner animation='border' role='status' style={loaderStyles}>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
