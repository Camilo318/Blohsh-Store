import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem("cart")) || {
  items: {},
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartAddItem(state, action) {
      const item = action.payload
      return {
        ...state,
        items: { ...state.items, [item._id]: item },
        total: state.total + item.priceTotal,
      }
    },
    cartRemoveItem(state, action) {
      const id = action.payload
      const newItems = { ...state.items }
      const subAmount = newItems[id].priceTotal
      delete newItems[id]
      return {
        ...state,
        items: newItems,
        total: state.total - subAmount,
      }
    },
  },
})

//Action creators
export const { cartAddItem, cartRemoveItem } = cartSlice.actions

export default cartSlice.reducer

//Middleware to handle repeated items in the cart and storing info in localStorage while adding items to the cart
export const preAddToCart = (item) => (dispatch, getState) => {
  const { items } = getState().cart
  if (items[item._id]) return
  dispatch(cartAddItem(item))
  const { cart } = getState()
  console.dir(cart)
  localStorage.clear()
  localStorage.setItem("cart", JSON.stringify(cart))
}
