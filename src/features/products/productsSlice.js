import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  status: "idle",
  entities: [],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsLoading(state, action) {
      return {
        ...state,
        status: "loading",
      }
    },
    productsSucces(state, action) {
      const products = action.payload
      return {
        ...state,
        entities: products,
      }
    },

    productsFail(state, action) {
      return {
        ...state,
        status: "idle",
      }
    },
  },
})

export const {
  productsLoading,
  productsSucces,
  productsFail,
} = productsSlice.actions

//thunk action creator
export const fetchProducts = (api) => {
  return async function fetchProductsThunk(dispatch, getState) {
    try {
      dispatch(productsLoading())

      const {
        data: { products },
      } = await axios.get(api)
      const prevState = getState()
      console.log(prevState)
      dispatch(productsSucces(products))
    } catch (err) {
      dispatch(productsFail(err))
    }
  }
}

export default productsSlice.reducer
