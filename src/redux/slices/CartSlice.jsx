import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // Check if existing:
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      // if existing:
      if (existingItem) {
        // traversing in the cart, and if items id & whatever we data we have it's id, is equal then ->
        // keep the previous item as it is (...item), just change the qty by + 1;
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementQty,
  incrementQty,
} = CartSlice.actions;

export default CartSlice.reducer;
