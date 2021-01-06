import React from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import { Image, ListGroup, Card, Button } from "react-bootstrap"
import Rating from "../components/Rating"
import products from "../products"

const ProductScreen = () => {
  const history = useHistory()
  const { id } = useParams()
  const product = products.find((item) => item._id === id)
  return (
    <div>
      <h1>{product?.name}</h1>
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
            <ListGroup.Item>
              <Rating value={product?.rating} text={product?.numReviews} />
            </ListGroup.Item>

            <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product?.description}</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
