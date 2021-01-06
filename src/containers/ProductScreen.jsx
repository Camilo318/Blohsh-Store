import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Image, ListGroup, Button } from "react-bootstrap"
import Rating from "../components/Rating"
import axios from "axios"

const ProductScreen = () => {
  const history = useHistory()
  const { id } = useParams()
  const [product, setProduct] = useState({})

  console.log(product)

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }

    fetchProduct()
  }, [])

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
              <Rating rating={product?.rating} reviews={product?.numReviews} />
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Price:</strong> ${product?.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {product?.description}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Status: </strong>
              {product?.countInStock ? "In Stock 😗" : "Out of Stock 😑"}

              <Button
                className='my-3 btn-cart'
                variant='dark'
                size='lg'
                block
                disabled={product?.countInStock < 1}
              >
                ADD TO CART
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
