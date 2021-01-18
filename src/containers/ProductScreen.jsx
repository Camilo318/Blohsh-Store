import React, { useState, useEffect } from "react"
import axios from "axios"
import { useHistory, useParams } from "react-router-dom"
import { Image, ListGroup, Button } from "react-bootstrap"
import Rating from "../components/Rating"
import Loader from "../components/Loader"
import Notification from "../components/Notification"
import AmountSelector from "../components/AmountSelector"
import { preAddToCart } from "../features/cart/cartSlice"
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
      preAddToCart({
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
      <Notification show={show} setShow={setShow}>
        <Button variant='outline-primary' className='mr-3' onClick={goToCart}>
          Cart
        </Button>
        <Button variant='outline-dark'>Checkout</Button>
      </Notification>
      <h2>{product?.name}</h2>
      <Button onClick={() => history.goBack()} variant='light'>
        Go Back
      </Button>

      <div className='product__container my-2'>
        <div className='product__photo'>
          <Image fluid rounded src={product?.image} alt={product?.name} />
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
                <AmountSelector
                  stock={product?.countInStock}
                  setAmount={setQty}
                />
                <strong>${(product?.price * qty).toFixed(2)}</strong>
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
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  )
}

export default ProductScreen
