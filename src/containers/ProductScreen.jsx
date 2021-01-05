import React from "react"
import { useHistory, useParams } from "react-router-dom"

const ProductScreen = () => {
  const history = useHistory()
  const params = useParams()
  return (
    <div>
      <h1>Product</h1>
    </div>
  )
}

export default ProductScreen
