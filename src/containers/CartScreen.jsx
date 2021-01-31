import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { ListGroup, Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { cartRemoveItem } from "../features/cart/cartSlice"
import AmountSelector from "../components/AmountSelector"

const CartScreen = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const items = Object.values(cart.items)

  if (Object.keys(items).length === 0) {
    return (
      <div className='shopping-cart'>
        <h2>Your Blohsh Cart is empty</h2>
        <p>Your Shopping Cart lives to serve. Give it a purpose</p>
      </div>
    )
  }

  const removeFromCart = (id) => {
    dispatch(cartRemoveItem(id))
  }
  return (
    <div className='shopping-cart'>
      <h2>Shopping Cart</h2>
      <ListGroup variant='flush' className='mt-4'>
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
                <Link to={"/product/" + item?._id}>
                  <Image src={item.image} alt={item.name} fluid rounded />
                </Link>
              </Col>
              <Col md={4}>
                <div className='mb-3'>
                  <Link to={"/product/" + item?._id}>
                    <h5>{item.name}</h5>
                  </Link>
                </div>
                <AmountSelector stock={item.countInStock} inCart={true} />
                <div className='item-options mt-3 d-flex'>
                  <div
                    className='delete mr-3'
                    onClick={() => removeFromCart(item._id)}>
                    Delete
                  </div>
                  <div className='save'>Save for later</div>
                </div>
              </Col>
              <Col md={3}>
                <span>${item.price}</span>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
        <ListGroup.Item>
          <Row>
            <Col sm={7} md={{ span: 4, offset: 3 }}>
              <div className='d-flex'>
                <span>
                  <strong>Subtotal ({items.length} items):</strong>
                </span>
              </div>
            </Col>
            <Col sm={5} md={3}>
              <strong>${cart.total.toFixed(2)}</strong>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default CartScreen
