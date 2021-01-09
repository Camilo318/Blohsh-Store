import React, { useEffect, useState } from "react"
import Product from "../components/Product"
import axios from "axios"

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get("/api/products/")
        setProducts(data.products)
      } catch (err) {
        console.log("Whooops")
      }
    }

    fetchProducts()
  }, [])

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
