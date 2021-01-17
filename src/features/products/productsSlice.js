import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  status: "idle",
  entities: [],
  error: null,
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
    productsSuccess(state, action) {
      const products = action.payload
      return {
        ...state,
        entities: products,
        status: "idle",
      }
    },

    productsFail(state, action) {
      return {
        ...state,
        status: "idle",
        error: action.payload,
      }
    },
  },
})

export const {
  productsLoading,
  productsSuccess,
  productsFail,
} = productsSlice.actions

//thunk action creator
export const fetchProducts = (api) => {
  return async function fetchProductsThunk(dispatch) {
    try {
      dispatch(productsLoading())
      const { data } = await axios.get(api)
      const { products } = data
      dispatch(productsSuccess(products))
    } catch (err) {
      dispatch(productsFail(err))
    }
  }
}

export default productsSlice.reducer
