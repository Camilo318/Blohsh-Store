import React from "react"
import { Card } from "react-bootstrap"
import Rating from "./Rating"

const Product = ({ item }) => {
  return (
    <Card className="my-3 py-3 rounded product" bg="light">
      <a href="/product">
        <Card.Img src={item?.image} variant="top" />
      </a>

      <Card.Body>
        <a href="/billie">
          <Card.Title>
            <strong>{item?.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <Rating value={item?.rating} text={item?.numReviews + " reviews"} />
        </Card.Text>

        <Card.Text as="h3">${item?.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
