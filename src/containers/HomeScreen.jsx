import React from "react"
import products from "../products"
import Product from "../components/Product"

const HomeScreen = () => {
  const renderedProducts = products.map((item) => (
    <Product key={item?._id} item={item} />
  ))
  return (
    <>
      <h1>Latest Products</h1>
      <div className="grid__wrapper">{renderedProducts}</div>
    </>
  )
}

export default HomeScreen
