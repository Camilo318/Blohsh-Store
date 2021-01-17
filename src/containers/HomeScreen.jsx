import React, { useEffect } from "react"
import Product from "../components/Product"

import { fetchProducts } from "../features/products/productsSlice"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/Loader"

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
    return <h2>Whoopss, something went wrong</h2>
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
