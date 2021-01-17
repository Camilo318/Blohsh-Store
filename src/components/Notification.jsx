import React from "react"
import { Toast } from "react-bootstrap"

const Notification = ({ show, setShow, children }) => {
  return (
    <Toast animation show={show} onClose={() => setShow(false)}>
      <Toast.Header>Item added to the cart</Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  )
}

export default Notification
