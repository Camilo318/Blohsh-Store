import React, { useEffect } from "react"
import Product from "../components/Product"

import { fetchProducts } from "../features/products/productsSlice"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/Loader"

const HomeScreen = () => {
  const products = useSelector((state) => state.products.entities)
  const loadState = useSelector((state) => state.products.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts("/api/products/"))
  }, [dispatch])

  if (loadState === "loading") {
    return <Loader />
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
