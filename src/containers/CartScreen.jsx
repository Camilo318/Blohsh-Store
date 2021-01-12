import React from "react"
import { useSelector } from "react-redux"
import { ListGroup, Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const CartScreen = () => {
  const cart = useSelector((state) => state.cart)
  const items = Object.values(cart.items)

  if (Object.keys(items).length === 0) {
    return (
      <div className='shopping-cart'>
        <h2>Your Blohsh Cart is empty</h2>
        <p>Your Shopping Cart lives to serve. Give it a purpose</p>
      </div>
    )
  }
  return (
    <div className='shopping-cart'>
      <h2>Shopping Cart</h2>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <Row>
            <Col md={3}></Col>
            <Col md={4}>
              <h6>Product</h6>
            </Col>
            <Col md={3}>
              <h6>Price</h6>
            </Col>
          </Row>
        </ListGroup.Item>
        {items.map((item) => (
          <ListGroup.Item key={item._id}>
            <Row>
              <Col md={3}>
                <Image src={item.image} alt={item.name} fluid rounded />
              </Col>
              <Col md={4}>
                <Link to={"/product/" + item?._id}>{item.name}</Link>
                <div className='item-options'>
                  <div className='item-options__delete'>Delete</div>
                  <div className='item-options__save'>Save for later</div>
                </div>
              </Col>
              <Col md={3}>
                <span>${item.price}</span>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default CartScreen
