import React from "react"
import { Card } from "react-bootstrap"
import Rating from "./Rating"
import { Link } from "react-router-dom"

const Product = ({ item }) => {
  return (
    <Card className='my-3 py-3 rounded product' bg='light'>
      <Link to={"/product/" + item?._id}>
        <Card.Img src={item?.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={"/product/" + item?._id}>
          <Card.Title>
            <strong>{item?.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={item?.rating} text={item?.numReviews + " reviews"} />
        </Card.Text>

        <Card.Text as='h3'>${item?.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
