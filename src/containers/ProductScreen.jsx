import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Image, ListGroup, Button, Toast } from "react-bootstrap"
import Rating from "../components/Rating"
import Loader from "../components/Loader"
import axios from "axios"
import { cartAddItem } from "../features/cart/cartSlice"
import { useDispatch } from "react-redux"

const ProductScreen = () => {
  const history = useHistory()
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [qty, setQty] = useState(1)
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  console.log("Render!")

  const addToCart = () => {
    setShow(true)
    dispatch(
      cartAddItem({
        _id: id,
        name: product.name,
        countInStock: product.countInStock,
        image: product.image,
        price: product.price,
        priceTotal: product.price * qty,
        qty,
      })
    )
  }
  const goToCart = () => {
    history.push(`/cart/${id}?qty=${qty}`)
  }

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${id}`)
      console.log("About to trigger a re-render")
      setProduct(data)
      console.log("We just rendered")
      setIsLoading(false)
    }

    fetchProduct()
  }, [id])

  if (isLoading) return <Loader />
  return (
    <>
      <Toast animation show={show} onClose={() => setShow(false)}>
        <Toast.Header>Item added to the cart</Toast.Header>
        <Toast.Body>
          <Button variant='outline-primary' className='mr-3' onClick={goToCart}>
            Cart
          </Button>
          <Button variant='outline-dark'>Checkout</Button>
        </Toast.Body>
      </Toast>
      <h2>{product?.name}</h2>
      <Button onClick={() => history.goBack()} variant='light'>
        Go Back
      </Button>

      <div className='product__container my-3'>
        <div className='product__photo'>
          <Image fluid src={product?.image} alt={product?.name} />
        </div>
        <div className='product__info'>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product?.description}</ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product?.rating} reviews={product?.numReviews} />
            </ListGroup.Item>

            <ListGroup.Item>
              <div className='product__amount'>
                <div className='amount-selector'>
                  <div
                    className={`sub ${qty < 2 && "disabled"}`}
                    onClick={() =>
                      setQty((a) => {
                        const newQty = a - 1
                        return newQty < 1 ? 1 : newQty
                      })
                    }>
                    -
                  </div>

                  <div className='amount'>{qty}</div>
                  <div
                    className='add'
                    onClick={() =>
                      setQty((a) => {
                        const newQty = a + 1
                        return newQty
                      })
                    }>
                    +
                  </div>
                </div>
                <strong>${product?.price * qty}</strong>
              </div>
            </ListGroup.Item>

            <ListGroup.Item>
              {product?.countInStock ? "In Stock 😗" : "Out of Stock 😑"}
              <Button
                className='my-3 btn-cart'
                variant='dark'
                size='lg'
                block
                onClick={addToCart}
                disabled={product?.countInStock < 1}>
                ADD TO CART
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  )
}

export default ProductScreen
