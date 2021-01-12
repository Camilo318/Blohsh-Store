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
        total: state.total + item.price,
      }
    },
  },
})

//Action creators
export const { cartAddItem } = cartSlice.actions
export default cartSlice.reducer
