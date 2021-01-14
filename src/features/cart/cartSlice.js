import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: {},
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartAddItem(state, action) {
      const item = action.payload
      if (state.items[item._id]) return state

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
