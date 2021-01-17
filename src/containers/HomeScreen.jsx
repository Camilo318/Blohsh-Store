import React, { useEffect } from "react"
import Product from "../components/Product"

import { fetchProducts } from "../features/products/productsSlice"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/Loader"
import { Alert, Button } from "react-bootstrap"

const HomeScreen = () => {
  const products = useSelector((state) => state.products.entities)
  const loadState = useSelector((state) => state.products.status)
  const error = useSelector((state) => state.products.error)
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length < 1) {
      console.log("Mikasa")
      dispatch(fetchProducts("/api/products/"))
    } else {
      console.log("Products already in Mikasa")
    }
  }, [dispatch, products])

  if (loadState === "loading") {
    return <Loader />
  }
  if (error) {
    return (
      <Alert variant='warning'>
        <Alert.Heading>Something went wrong.</Alert.Heading>
        Please check your connection and try again.
        <hr />
        <div className='d-flex justify-content-start'>
          <Button variant='outline-dark'>Support</Button>
        </div>
      </Alert>
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
