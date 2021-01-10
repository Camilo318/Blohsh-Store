import React, { useEffect } from "react"
import Product from "../components/Product"

import { fetchProducts } from "../features/products/productsSlice"
import { useDispatch, useSelector } from "react-redux"
import { Spinner } from "react-bootstrap"

const HomeScreen = () => {
  const products = useSelector((state) => state.products.entities)
  const loadState = useSelector((state) => state.products.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts("/api/products/"))
  }, [dispatch])

  if (loadState === "loading") {
    return (
      <Spinner
        animation='border'
        role='status'
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
          display: "block",
        }}
      >
        <span className='sr-only'>Loading...</span>
      </Spinner>
    )
  }

  const renderedProducts = products.map((item) => (
    <Product key={item?._id} item={item} />
  ))
  return (
    <>
      <h1>Latest Products</h1>
      <div className='grid__wrapper'>{renderedProducts}</div>
    </>
  )
}

export default HomeScreen
